import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    color: #fff;
    width: 80px;
    height: 62px;
    padding: 0px 10px;
    margin-left: 5px;
    border-radius: 10px;
    border: none;
    font-weight: normal;
    transition: 0.5s;

  &.listButton {
    background: #1c86ee;
    margin-top: 28px;

    &:hover {
      background: ${shade(0.2, '#1c86ee')};
    }
  }

  &.appointmentButton {
    background: #1c86ee;
    height: 58px;

    &:hover {
      background: ${shade(0.2, '#1c86ee')};
    }
  }

  &.updateButton {
    background: #40e0d0;
    height: 58px;

    &:hover {
      background: ${shade(0.2, '#40e0d0')};
    }
  }

  &.deleteButton {
    background: #ff6a6a;
    height: 58px;

    &:hover {
      background: ${shade(0.2, '#ff6a6a')};
    }
  }

  &.addButton {
    background:  #40e0d0;
    height: 52px;

    &:hover {
      background: ${shade(0.2, '#40e0d0')};
    }
  }

  &.physicianButton {
    background:  #40e0d0;
    height: 52px;
    width: 180px;

    &:hover {
      background: ${shade(0.2, '#40e0d0')};
    }
  }

  &.patientButton {
    background:  #1c86ee;
    height: 52px;
    width: 180px;

    &:hover {
      background: ${shade(0.2, '#1c86ee')};
    }
  }

  &.appointmentButton {
    background:  #ff6a6a;
    height: 52px;
    width: 180px;

    &:hover {
      background: ${shade(0.2, '#ff6a6a')};
    }
  }


`;
