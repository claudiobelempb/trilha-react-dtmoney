import { CardContainer, CardTitle, CardValue, CardIcon } from './style';

interface ICardProps {
  bgColor?: string;
  color?: string;
  icon?: string;
}
export function Card({ bgColor, color, icon }: ICardProps) {
  return (
    <CardContainer bgColor={bgColor} color={color}>
      <CardTitle >
        Entrada
        <CardIcon>
          <img src={icon} />
        </CardIcon>
      </CardTitle>
      <CardValue>17.400,00</CardValue>
    </CardContainer>
  );
}
