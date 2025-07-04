import styled from 'styled-components'

export const Vagas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

// .vagas {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   column-gap: 16px;
//   row-gap: 16px;
//   margin-top: 32px;
// }

// @media (max-width: 768px) {
//   .vagas {
//     grid-template-columns: 1fr;
//   }
// }
