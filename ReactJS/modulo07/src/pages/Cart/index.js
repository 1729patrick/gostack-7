import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

const Cart = () => {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QUANTIDADE</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/blusa-infantil-kamylus-estampada/16/E87-0895-016/E87-0895-016_detalhe1.jpg?resize=280:280"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>tenis x</strong>
              <span>R$ 626</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 5265625</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 145265,00</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
