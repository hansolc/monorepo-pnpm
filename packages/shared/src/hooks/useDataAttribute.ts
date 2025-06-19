interface Props {
  isSelected?: boolean;
  isHover?: boolean;
}

function useDataAttribute({ isSelected, isHover }: Props = {}) {
  return {
    ...(isSelected && { "data-selected": "" }),
    ...(isHover && { "data-hover": "" }),
  };
}

export default useDataAttribute;
