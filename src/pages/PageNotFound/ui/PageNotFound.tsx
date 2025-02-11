import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageNotFound.module.scss';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound = ({ className }: PageNotFoundProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.PageNotFound, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};

export default PageNotFound;
