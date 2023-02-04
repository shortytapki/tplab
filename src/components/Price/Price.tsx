import './Price.scss';

export default function Price({
  isNew,
  value,
}: {
  isNew?: boolean;
  value: string;
}) {
  let full = '';
  let pences = '';
  if (value.includes('.')) {
    [full, pences] = value.split('.');
  } else {
    full = value;
  }
  return (
    <strong className={`price ${isNew ? 'price--new' : 'price--old'}`}>
      {full}
      {pences && <sup>{pences}</sup>}
      <span>₽</span>
    </strong>
  );
}
