import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageNotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound = ({ className }: PageNotFoundProps) => {
    
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.PageNotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default PageNotFound;