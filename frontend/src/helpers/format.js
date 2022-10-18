// import { formatCNPJ, formatCPF } from '@brazilian-utils/brazilian-utils';

// export function formatCardNumber(text = '', isSecret = false) {
//   const cardNumber = isSecret
//     ? text.replace(/\s/g, '').replace(/.(?=.{4,}$)/g, '*')
//     : text.replace(/\D/g, '');
//   const groups = cardNumber.match(/.{1,4}/g) || [];

//   return groups.slice(0, 4).join(' ');
// }


// export function formatRg(v0, errChar = '') {
//   const v = v0.toUpperCase().replace(/[^\dX]/g, '');
//   return (v.length == 8 || v.length == 9) ?
//     v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/, '$1.$2.$3-$4') :
//     (errChar + v0)
//     ;
// }

// export function formatCardExpiration(text = '') {
//   return text
//     .replace(/\D/g, '')
//     .replace(/(\d{2})(\d)/, '$1/$2')
//     .replace(/(\/\d{2})\d+?$/, '$1');
// }

// export function formatBirthdayDate(text = '') {
//   return text
//     .replace(/\D/g, '')
//     .replace(/(\d{2})(\d)/, '$1/$2')
//     .replace(/(\d{2})(\d)/, '$1/$2')
//     .replace(/(\/\d{4})\d+?$/, '$1');
// }

// export function formatTelephoneNumber(text = '') {
//   return text.replace(/\D/g, '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
// }

// export function formatPhoneNumber(text = '') {
//   return text?.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
// }

// export const formatToHideCPFValue = (cpf) => {
//   return cpf
//     .split('')
//     .map((char, i) => ((i > 3 && i < 7) || (i > 7 && i < 11) ? '*' : char))
//     .join('');
// };

// export const formatToHideCNPJValue = (cpf) => {
//   return cpf
//     .split('')
//     .map((char, i) => ((i > 3 && i < 9) || (i > 7 && i < 15) ? '*' : char))
//     .join('');
// };

// export function formatForOnlyNumbers(text = '') {
//   return text.replace(/[^0-9]/g, '');
// }

// export function formatForOnlyText(text = '') {
//   return text.replace(/\d/g, '');
// }

// export function formatToAddString(text, indexToAdd, stringToAdd) {
//   return text.substring(0, indexToAdd) + stringToAdd + text.substring(indexToAdd, text.length);
// }

// export function formatCPFCNPJ(value) {
//   if (value.length <= 14) {
//     return formatCPF(value);
//   } else {
//     return formatCNPJ(value);
//   }
// }

// export function formatName(text = '') {
//   return text.replace(/[&/\\#,+()$%:*?<>{}!@/_=|\n\r]/g, '');
// }
