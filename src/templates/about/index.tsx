/* eslint-disable prettier/prettier */
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'

export default function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href='/'>
        <CloseOutline size={32}/>
      </LinkWrapper>

      <S.Heading>
        My Trips
      </S.Heading>

      <S.Body>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, magnam? Quas doloremque esse deleniti obcaecati ipsum et aut nobis nulla non fugit illo cum, ratione enim consequuntur culpa sapiente! Reprehenderit!
        </p>
        
      </S.Body>
    </S.Content>
  )
}
