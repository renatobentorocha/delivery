import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalActions from '~/store/ducks/modal';

const { width, height } = Dimensions.get('window');

class ModalMessage extends Component {
  handleVisible = () => {
    const { hideModalRequest, afterCloseModal } = this.props;

    hideModalRequest();
    afterCloseModal();
  };

  render() {
    const { visible, message } = this.props.modal;
    const { afterCloseModal } = this.props;

    return (
      <Modal onRequestClose={afterCloseModal} animationType={'slide'} transparent visible={visible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                padding: 8,
                margin: 3,
                backgroundColor: '#DFD9D9',
                borderRadius: 3,
              }}
              onPress={() => this.handleVisible()}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 15,
                  textAlign: 'center',
                }}
              >
                {message} (Clique para voltar)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalMessage);
