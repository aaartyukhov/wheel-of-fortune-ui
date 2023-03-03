import React, { useEffect, useState } from 'react';
import { TabsResponsive, Tab } from '@alfalab/core-components-tabs';
import { createCn } from 'bem-react-classname';
import { useDispatch, useSelector } from 'react-redux';

import './ResultPage.scss';
import { allUsersSelector, getUsersRequest } from '../../store/state/users';
import {
  allPresentsSelector,
  getPresentsRequest,
} from '../../store/state/presents';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

const cn = createCn('result-page');

const idUsersTab = 'tab-users';
const idPresentsTab = 'tab-presents';

const ResultPage = () => {
  const [selectedTab, setSelectedTab] = useState(idUsersTab);
  const dispatch = useDispatch();

  const handleChangeTab = (_, { selectedId }) => {
    setSelectedTab(selectedId);
  };

  useEffect(() => {
    dispatch(getUsersRequest());
    dispatch(getPresentsRequest());
  }, []);

  const users = useSelector(allUsersSelector);
  const presents = useSelector(allPresentsSelector);


  return (
    <PageLayout className={cn()}>
      <TabsResponsive selectedId={selectedTab} onChange={handleChangeTab}>
        <Tab title="Игроки" id={idUsersTab} />
        <Tab title="Призы" id={idPresentsTab} />
      </TabsResponsive>
      <ul>
        {selectedTab === idUsersTab
          ? users.map((user) => {
            const { email, present, _id } = user;
            return (
              <li key={_id}>
                <h3>{email}</h3>
                <p>{`приз: ${present ? present.description : 'не играл'}`}</p>
              </li>
            );
          })
          : presents.map((user) => {
            const { description, count, _id } = user;
            return (
              <li key={_id}>
                <h3>{description}</h3>
                <p>{`Осталось: ${count}`}</p>
              </li>
            );
          })}
      </ul>
    </PageLayout>
  );
};

export default ResultPage;
