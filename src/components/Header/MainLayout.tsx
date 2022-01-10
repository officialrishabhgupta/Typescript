import React from 'react';
import {useParams} from 'react-router-dom';
import { Greet } from './Greet';
import Main from './Main';
import Subscribe from './Subscribe';
import Start from './Start';

const AccountDetailView: React.FC = (): JSX.Element => {
  const params = useParams();
  return <div>
    {`View Account ID "${params.id}"`}
    <Greet name='Rishabh' projectCount={10} isLoggedIn={true}/>
    <Main/>
    <Start/>
    <Subscribe/>
    </div>
  ;
};

export default AccountDetailView;