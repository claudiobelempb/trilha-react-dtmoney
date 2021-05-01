import { Container } from './styles';

import { Card } from '../Card';
import { CardList } from '../CardList';

import income from '../../assets/images/income.svg';
import outcome from '../../assets/images/outcome.svg';
import total from '../../assets/images/total.svg';

export function Summary() {
  return(
    <>
      <Container>
        <Card icon={income}/>
        <Card icon={outcome}/>
        <Card bgColor={'#33CC95'} color={'#FFFFFF'} icon={total}/>
      </ Container>
      <Container>
      <CardList />
      </Container>
    </> 
  );
}