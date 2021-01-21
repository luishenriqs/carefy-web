import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    color: #fff;
    width: 80px;
    height: 52px;
    padding: 0px 10px;
    margin-left: 5px;
    border-radius: 50px;
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

  &.blueButton {
    background: #1c86ee;

    &:hover {
      background: ${shade(0.2, '#1c86ee')};
    }
  }

  &.greenButton {
    background: #40e0d0;

    &:hover {
      background: ${shade(0.2, '#40e0d0')};
    }
  }

  &.redButton {
    background: #ff6a6a;

    &:hover {
      background: ${shade(0.2, '#ff6a6a')};
    }
  }

  &.especialButton {
    background:  #ff6a6a;
    border-radius: 0 50px 50px 0;
    width: 90px;

    &:hover {
      background: ${shade(0.2, '#ff6a6a')};
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
