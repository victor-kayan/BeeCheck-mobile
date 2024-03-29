import React, { Component } from "react";
import { View, CardItem, Left, Text, Right, Textarea, Body } from "native-base";
import { InputSwitch, ButtonCustom } from "../../../componentes";
import styles from "./styles";

class FormVisita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tem_agua: 1,
      tem_sombra: 1,
      tem_comida: 1,
      observacao: ""
    };
  }

  handleAddVisita = () => {
    let tem_agua = this.state.tem_agua == 1 ? 0 : 1;
    let tem_sombra = this.state.tem_sombra == 1 ? 0 : 1;
    let tem_comida = this.state.tem_comida == 1 ? 0 : 1;

    let values = {
      tem_agua,
      tem_sombra,
      tem_comida,
      observacao: this.state.observacao
    };

    this.props.handleAddVisitaApiario(values);
  };

  render() {
    const { tem_agua, tem_sombra, tem_comida, observacao } = this.state;

    return (
      <View>
        <CardItem>
          <Left>
            <Text>Há Água?</Text>
          </Left>
          <Body />
          <Right>
            <InputSwitch
              value={tem_agua}
              onValueChange={tem_agua => this.setState({ tem_agua })} // this is necessary for this component
            />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Está sombreado?</Text>
          </Left>
          <Body />
          <Right>
            <InputSwitch
              value={tem_sombra}
              onValueChange={tem_sombra => this.setState({ tem_sombra })} // this is necessary for this component
            />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Há Comida?</Text>
          </Left>
          <Body />
          <Right>
            <InputSwitch
              value={tem_comida}
              onValueChange={tem_comida => this.setState({ tem_comida })} // this is necessary for this component
            />
          </Right>
        </CardItem>
        <CardItem>
          <Textarea
            rowSpan={4}
            value={observacao}
            onChangeText={observacao => this.setState({ observacao })}
            style={{ width: "100%", borderRadius: 5 }}
            bordered
            placeholder="Observações"
          />
        </CardItem>
        <CardItem style={{ alignSelf: "flex-end" }}>
          <ButtonCustom
            style={styles.buttonSalveVisita}
            onPress={this.handleAddVisita}
            title="Visitar Colmeias"
            iconRight="arrowright"
            typeIconRight="AntDesign"
          />
        </CardItem>
      </View>
    );
  }
}
export default FormVisita;
