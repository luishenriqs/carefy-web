import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    color: #fff;
    width: 80px;
    height: 58px;
    padding: 0px 10px;
    margin-left: 5px;
    border-radius: 10px;
    border: none;
    font-weight: normal;
    transition: 0.5s;

  &.listButton {
    background: #1c86ee;
    margin-top: 22px;

    &:hover {
      background: ${shade(0.2, '#1c86ee')};
    }
  }

  &.appointmentButton {
    background: #1c86ee;

    &:hover {
      background: ${shade(0.2, '#1c86ee')};
    }
  }

  &.updateButton {
    background: #40e0d0;

    &:hover {
      background: ${shade(0.2, '#40e0d0')};
    }
  }

  &.deleteButton {
    background: #ff6a6a;

    &:hover {
      background: ${shade(0.2, '#ff6a6a')};
    }
  }


`;
