import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Компонент для тестирования Error Boundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation('main');

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>
      {t('Воспроизведение ошибки')}
    </Button>
  );
};

export default BugButton;
