import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Select',
  parameters: {
    notes: { markdown: readme },
  },
};

const styles = {
  height: '100vh',
};

export const defaultSelect = () => (
  <div style={styles}>
    <bds-select>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const iconSelect = () => (
  <div style={styles}>
    <bds-select icon="favorite">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled icon="favorite">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const selectedSelect = () => (
  <div style={styles}>
    <bds-select value="2">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled value="2">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const disabledSelect = () => (
  <div style={styles}>
    <bds-select disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select icon="favorite" disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const selectWithIconOnSlot = () => (
  <div style={styles}>
    <bds-select placeholder="Selecione" label="Permissão">
      <bds-select-option value="1" slot-align="flex-start" title-text="Convidado">
        <bds-icon slot="input-left" name="eye-open" size="medium" color="#F66689"></bds-icon>
        Apenas visualiza informações do contrato.
      </bds-select-option>
      <bds-select-option value="2" slot-align="flex-start" title-text="Membro">
        <bds-icon slot="input-left" name="edit" size="medium" color="#F9B42F"></bds-icon>
        Cria e edita chatbots, mas não gerencia os membros do contrato.
      </bds-select-option>
      <bds-select-option value="3" slot-align="flex-start" title-text="Admin">
        <bds-icon slot="input-left" name="avatar-user" size="medium" color="#2CC3D5"></bds-icon>
        Edita todos os dados do contrato, gerencia membros, cria e edita chatbots.
      </bds-select-option>
    </bds-select>
  </div>
);
