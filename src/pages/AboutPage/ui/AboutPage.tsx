import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const {t} = useTranslation("about")

  return (
    <div>
      {t('О сайте')}
      {t('О сайте 12345')}
    </div>
  )
}

export default AboutPage