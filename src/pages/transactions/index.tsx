import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={"50%"}>Desenvolvimento de site</td>
              <td><PriceHighLight variant={"income"}>12.000,00</PriceHighLight></td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width={"50%"}>Ar condicionado</td>
              <td><PriceHighLight variant={"outcome"}>3.000,00</PriceHighLight></td>
              <td>Compra</td>
              <td>13/04/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}