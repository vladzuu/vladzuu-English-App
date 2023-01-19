import { IconButton, Modal, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 4
}

interface ModalSettingProps {
  setIsOpen: any,
  handleClose: () => void,
  handleViewOption: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleTranscriptOption: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleAmountOption: (e: Event, newValue: number | number[]) => void,
  viewOption: 'table' | 'card',
  isOpen: boolean,
  isTranscription: boolean,
  amountWorlds: number,
}

const ModalSetting = ({
  setIsOpen,
  isOpen,
  viewOption,
  amountWorlds,
  isTranscription,
  handleTranscriptOption,
  handleAmountOption,
  handleViewOption,
  handleClose,
}: ModalSettingProps) => {




  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ display: 'flex', flexGrow: 2, alignItems: 'center' }}>
          <Typography width={'100%'} id="modal-modal-title" variant="h6" component="h2" align='center'>
            Настройки
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Отображение
        </Typography>
        <FormControl sx={{ mt: 2 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="card"
            name="radio-buttons-group"
            value={viewOption}
            onChange={handleViewOption}
          >
            <FormControlLabel value="table" control={<Radio />} label="Таблицей" />
            <FormControlLabel value="card" control={<Radio />} label="Карточкой" />
          </RadioGroup>
        </FormControl>
        <Divider />
        {(viewOption === 'card')
          ?
          <>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Показывать транскрипцию?
            </Typography>
            <FormControl sx={{ mt: 2 }}>
              <RadioGroup
                aria-labelledby="1"
                value={isTranscription}
                name="radio-buttons-group"
                onChange={handleTranscriptOption}
              >
                <FormControlLabel value={true} control={<Radio />} label="Да" />
                <FormControlLabel value={false} control={<Radio />} label="Нет" />
              </RadioGroup>
            </FormControl>
            <Divider />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Количество слов на странице
            </Typography>
            <Slider
              onChange={handleAmountOption}
              sx={{ mt: 2 }}
              aria-label="amount-world"
              defaultValue={amountWorlds}
              valueLabelDisplay="auto"
              step={5}
              marks
              min={15}
              max={50}

            />
          </>
          :
          ''
        }
      </Box>
    </Modal>
  );
};

export default ModalSetting;
