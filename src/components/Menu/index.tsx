import { MENU_ITEMS } from '@/components/Menu/menuItems';
import { Item, Menu, SubHeader, Divider, Div } from '@/components/Menu/styles';
import { AppDispatch } from '@/store/store';
import { Settings } from '@mui/icons-material';
import { Button, MenuItem } from '@mui/material';
import { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

function MenuComponent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [elemWidth, setElemWidth] = useState<number>(0);
  const open = Boolean(anchorEl);
  const { t } = useTranslation('flex');
  const buttonRef = createRef<HTMLButtonElement>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (buttonRef) {
      setElemWidth(buttonRef.current?.offsetWidth || 0);
    }
  }, [buttonRef]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        endIcon={<Settings fontSize="medium" />}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ fontSize: '1.5rem' }}
        ref={buttonRef}
      >
        {t('settings')}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 1 }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: { width: elemWidth },
        }}
      >
        {MENU_ITEMS(dispatch).map((elem, idx) => (
          <div key={`elem.title-${idx}`}>
            {idx === 1 && <Divider />}
            <SubHeader>{t(elem.title)}</SubHeader>
            <div key={idx}>
              {elem.items.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => elem.fn(item.name)}
                  sx={{ p: '6px 8px' }}
                >
                  <Div>
                    <Item>{t(item.name)}</Item>
                    {item.icon}
                  </Div>
                </MenuItem>
              ))}
            </div>
          </div>
        ))}
      </Menu>
    </div>
  );
}

export default MenuComponent;
