import * as React from 'react';
import { useState } from 'react';

import SmallCard from '../../../custom/SmallCard';
import CustomButton from '../../../custom/CustomButton';
import {
  mdiBookOpenPageVariant,
  mdiPlayCircle,
  mdiCube,
  mdiLayers,
  mdiCubeOutline,
  mdiLayersOutline,
} from '@mdi/js';
import MultilineTextBox from '@/components/custom/MultiLineText';

export default function FirstPage() {
  const [information, setInformation] = useState('');

  const handleChangeInformation = (event) => {
    setInformation(event.target.value);
  };

  const onClick1 = () => {};
  const onClick2 = () => {};
  const onClick3 = () => {};
  const onClick4 = () => {};
  const onClick5 = () => {};
  const onClick6 = () => {};
  const onClick7 = () => {};
  return (
    <>
      <p>Method Setting</p>
      <div className="">
        <SmallCard title="Analysis Method">
          <CustomButton
            icon={mdiBookOpenPageVariant}
            label="Setting Call"
            click={onClick1}
          />
          <CustomButton icon={mdiPlayCircle} label="Go" click={onClick2} />
        </SmallCard>
        <SmallCard title="Learning Method">
          <CustomButton icon={mdiCube} label="DLCall" click={onClick3} />
          <CustomButton icon={mdiLayers} label="MLCall" click={onClick4} />
          <CustomButton icon={mdiPlayCircle} label="Go" click={onClick5} />
        </SmallCard>
        <SmallCard title="Object Method">
          <CustomButton icon={mdiCubeOutline} label="DLCall" click={onClick6} />
          <CustomButton
            icon={mdiLayersOutline}
            label="MLCall"
            click={onClick7}
          />
        </SmallCard>
        <SmallCard title="Method Information">
          <MultilineTextBox
            style={{ fontSize: '12px' }}
            label="Information"
            value={information}
            onChange={handleChangeInformation}
            minRows={6}
            placeholder="Enter some description here..."
          />
        </SmallCard>
      </div>
    </>
  );
}
