interface IProps {
  viewBox: string;
  name: string;
  color: string;
}

export const returnFavoriteIconConfigs = (isFavorite: boolean): IProps => {
  return {
    viewBox: isFavorite ? '0 0 16 16' : '0 0 471.701 471.701',
    name: isFavorite ? 'FilledHeart' : 'EmptyHeart',
    color: isFavorite ? '#FF0000' : '#E2E2E2',
  };
};
