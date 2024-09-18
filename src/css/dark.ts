const headerBg = `#202020`;
const headerText = `#E4E4E4`;
const cardBg = `#1E1E1E`;
const cardInfo = `#A2A2A2`;
const cardTitle = `#E2E2E2`;
const primaryButtonBg = `#c38FFF`;
const secondaryButtonBg = `#02DAC6`;
const buttonText = `#000000`;
const wrapperBg = `#121212`;

export const getHighlight = (opacity: number) =>
  `rgba(255,255,255, ${opacity || 1})`;
const getMid = (opacity: number) => `rgba(34, 34, 34, ${opacity || 1})`;
export const getDark = (opacity: number) => `rgba(17, 17, 17, ${opacity || 1})`;
const getMatterhorn = (opacity: number) => `rgba(79,79,79, ${opacity || 1})`;

export const dark = {
  colors: {
    headerBg,
    headerText,
    cardBg,
    cardInfo,
    cardTitle,
    primaryButtonBg,
    secondaryButtonBg,
    buttonText,
    wrapperBg,
    getMatterhornWaikawaGrey: getMatterhorn,
    getMidEastBay: getMid,
    getMidGhostWhite: getMid,
    getMidLavender: getMid,
    getMidTransparent: getMid,
    getMidWaikawaGrey: getMid,
    getMidWhite: getMid,
    highlight: getHighlight,
  },
  // style: {
  //   optionsButtonBorder: selected => `1px solid ${getHighlight(selected ? 1 : 0.2)}`,
  //   topbarBoxShadow: `7px 0 10px 0`,
  //   barBoxShadow: `-10px 0 10px 10px`,
  //   menuItemBoxShadow: `1px 1px 2px #000 inset`,
  //   cardBoxShadow: `0 0 6px 2px ${getDark(0.5)}`,
  //   userComponentShadow: `0 3px 6px black`,
  //   tableRtTdBorder: `1px solid transparent`,
  //   dwellerCameraIcon: 0.1,
  //   timeContainerButtomBorder: `1px solid #707070`,
  //   rowButtonsShadow: `0 -3px 6px rgba(0, 0, 0, 0.16)`,
  //   tabsKanbanBorder: `1px solid ${getDark()}`,
  //   tabsKanbanBorderSelected: `1px solid white`,
  //   generalSearchCardBorder: `1px solid transparent`,
  //   selectDisabledBorder: TRANSPARENT,
  //   selectDisabledOpacity: 1,
  //   clientCardStatusOpacity: 1,
  //   accountMenuBoxBorder: `0.5px solid rgb(59, 59, 59)`,
  //   menuItemBorder: `1px solid #595959`,
  //   menuItemBorderHover: `1px solid #9e9e9e`,
  //   inputFocusShadow: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 0, 0, 0.1)`,
  //   modalBoxShadow: `inset 0 2px 0 0 var(--highlight), 2px 2px 4px #000`,
  //   rightSliderShadow: `2px 2px 20px rgba(0, 0, 0, 0.4)`,
  //   selectIconOpacity: 0.5,
  //   dwellerSubTablePadding: `15px`,
  //   tableSubHeaderBorder: `1px solid rgba(0, 0, 0, 0.05)`,
  //   systemLogComparatorOpacity: 0.5,
  //   clientStatusShadow: `0 0 10px #000 inset`,
  //   clientStatusBorder: `1px solid rgba(0, 0, 0, 0.2)`,
  //   masterCompanyBoxShadow: `6px -3px 6px rgba(0, 0, 0, 0.16)`,
  //   timelineFilterLabel: `Lato-Light`,
  //   deviceHandOpacity: 0.25,
  //   tablePaginationShadow: `0 0 15px 0 rgba(0, 0, 0, 0.1)`,
  //   logoOpacity: 0.2,
  //   equipmentConnectionButtonBorder: `2px solid rgba(255, 255, 255, 0.1)`,
  //   personConfigureDropdownBoxShadow: `0 6px 10px rgba(0, 0, 0, 0.31)`,
  //   personConfigureDropdownBorder: `none`,
  //   personConfigureTableBorderMobile: `1px solid #707070`,
  // },
  // fontStyle: {
  //   systemTime: `Lato-Light`,
  // },
  // components: {
  //   selectArrow: Arrow,
  // },
};
