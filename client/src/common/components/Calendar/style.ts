import styled from 'styled-components';
import COLOR from '../../../styles/colors';
import { notRenderButton } from '../../../styles/helper';

export const Calendar = styled.article`
  border: 1px solid ${COLOR.GREY_500};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .react-calendar {
    width: 100%;

    button {
      ${notRenderButton};
    }
    abbr {
      text-align: center;
      text-decoration: none;
      width: 100%;
      display: inline-block;

      &[aria-label='토요일'] {
        color: ${COLOR.BLUE_500};
      }
      &[aria-label='일요일'] {
        color: ${COLOR.RED_500};
      }
    }

    &__navigation {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;

      &__arrow {
        font-size: 20px;
        min-width: 30px;
      }

      &__label {
        font-size: 20px;
        font-weight: 700;
      }
    }

    &__month-view {
      &__weekdays {
        margin-bottom: 15px;
      }
      &__days {
        text-align: left;

        &__day {
          &:hover {
            cursor: pointer;
            opacity: 0.75;
          }
        }

        &__day--weekend {
          &.weekend-saturday {
            color: ${COLOR.BLUE_500};
          }
          &.weekend-sunday {
            color: ${COLOR.RED_500};
          }
        }

        .react-calendar__tile--active {
          background-color: #eee;
        }

        button {
          padding: 15px;
        }
      }
    }
  }
`;
