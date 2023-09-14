import React from 'react';
import DocumentationTemplate from './badge.mdx';

export default {
  title: 'Components/Badge',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};
const mixBadge = {
  display: 'inline-flex',
  position: 'relative',
};
const badge = {
  display: 'flex',
  position: 'absolute',
  right: '-8px',
  top: '-8px',
};
const badgeStatus = {
  display: 'flex',
  position: 'absolute',
  right: '0',
  top: '0',
};

export const Properties = (args) => (
  <bds-badge shape={args.shape} color={args.color} icon={args.icon}></bds-badge>
);
Properties.argTypes = {
  shape: {
    table: {
      defaultValue: { summary: 'circle' },
    },
    description: 'Coloque o titulo do cabeçalho.',
    options: ['circle' , 'triangle' , 'triangle-reverse' , 'polygon', 'square'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o ícone que será utilizado no botão (Apenas outline).',
    control: 'text',
  },
  color: {
    table: {
      defaultValue: { summary: 'system' },
    },
    description: 'Defina o nome aplicado no avatar.',
    options: ['system' , 'danger' , 'warning' , 'success', 'neutral'],
    control: 'select',
  },
};

Properties.args = {
  shape: 'circle',
  color: 'system',
  icon: 'info',
};

export const typeBadge = () => (
  <bds-grid direction="column" gap="3" padding="4" align-items="center" justify-content="center">
    <bds-grid gap="4" margin="3" align-items="center">
      <bds-grid direction="column" align-items="center" gap="4">
        <bds-badge shape="circle" color="system"></bds-badge>
        <bds-typo bold="bold">Status</bds-typo>
      </bds-grid>
      <bds-grid direction="column" align-items="center" gap="2">
        <bds-badge shape="circle" color="system" icon="info"></bds-badge>
        <bds-typo bold="bold">Icon</bds-typo>
      </bds-grid>
      <bds-grid direction="column" align-items="center" gap="2">
        <bds-badge shape="circle" color="system" number={1234}></bds-badge>
        <bds-typo bold="bold">Number</bds-typo>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const exampleBadge = () => (
  <bds-grid gap="4" padding="4" align-items="center" justify-content="center">
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badge}>
        <bds-badge shape="circle" color="system" animation number={1}></bds-badge>
      </div>
    </bds-grid>
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badge}>
        <bds-badge shape="circle" color="system" animation icon="info"></bds-badge>
      </div>
    </bds-grid>
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badgeStatus}>
        <bds-badge shape="circle" color="system" animation></bds-badge>
      </div>
    </bds-grid>
  </bds-grid>
);
