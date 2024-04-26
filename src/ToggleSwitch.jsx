import { useState } from 'react';
import { Switch } from '@headlessui/react';

const ToggleSwitch = ({ initialTab = 'summarizer', onTabSwitch }) => {
  const [isOn, setIsOn] = useState(initialTab === 'analyzer');

  const handleToggle = () => {
    const newTab = isOn ? 'summarizer' : 'analyzer';
    setIsOn(!isOn);
    onTabSwitch(newTab);
  };

  return (
    <Switch
      checked={isOn}
      onChange={handleToggle}
      className={`${isOn ? 'bg-blue-600' : 'bg-gray-200'}
        relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Toggle Switch</span>
      <span
        className={`${isOn ? 'translate-x-6' : 'translate-x-1'}
        inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

export default ToggleSwitch;