import I18n from '../i18n/i18n';

const Const = {
    lang: I18n,
    regPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
    regEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    regEmail2: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/,
    regWebsite:
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
    gender: ['Male', 'Female'],
    booleanType: ['Yes', 'No'],
    dobFormat: 'YYYY-MM-DD',
    dateTimeFormate: 'YYYY-MM-DD HH:mm:ss',
    dateFormat: 'DD/MM/YYYY',
    placeholderImage:
        'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
};

export default Const;
