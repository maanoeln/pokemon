import { Pagination, PaginationWrapper } from '@/components/Pagination/styles';
import { ChangeEvent } from 'react';

interface IProps {
  numberOfPages: number;
  page: number;
  handleChange(_event: ChangeEvent<unknown>, value: number): void;
}
function PaginationComponent({ numberOfPages, page, handleChange }: IProps) {
  return (
    <PaginationWrapper>
      <Pagination
        count={numberOfPages}
        showFirstButton
        showLastButton
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </PaginationWrapper>
  );
}

export default PaginationComponent;
