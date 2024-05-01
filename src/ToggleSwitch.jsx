import { useState } from 'react';
import { Switch } from '@headlessui/react';

const ToggleSwitch = ({ initialTab = 'summarizer', onTabSwitch }) => {
  const [isOn, setIsOn] = useState(initialTab === 'summarizer');

  const handleToggle = () => {
    const newTab = isOn ? 'summarizer' : 'analyzer';
    setIsOn(!isOn);
    onTabSwitch(newTab);
  };

  return (
    <Switch
      checked={isOn}
      onChange={handleToggle}
      className={`${isOn ? 'bg-white' : 'bg-gray-200'}
        relative inline-flex h-[42px] w-[6%] items-center rounded-full`}
    >
      <span className="sr-only">Toggle Switch</span>
      <span
        className={`${isOn ? 'translate-x-12' : 'translate-x-2'}
        inline-block h-9 w-9 transform rounded-full bg-black transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

export default ToggleSwitch;