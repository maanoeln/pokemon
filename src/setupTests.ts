import '@testing-library/jest-dom';
import 'jest-styled-components';

export const mockNavigate = jest.fn();
export const mockParams = jest.fn();

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useNavigate: () => mockNavigate,
  useParams: mockParams,
}));
