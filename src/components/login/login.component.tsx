import {
  ChangeEventHandler,
  type FormEventHandler,
  useCallback,
  useRef,
} from "react";
import style from "./styles.module.css";

interface LoginProps {
  onLogin: (arg: { username: string; password: string }) => void;
}

type FieldHandler = ChangeEventHandler<HTMLInputElement>;
export function Login({ onLogin }: LoginProps) {
  const username = useRef("");
  const password = useRef("");
  const handleSubmit = useCallback<FormEventHandler>(
    (ev) => {
      ev.preventDefault();
      console.log(username.current);
      onLogin({ username: username.current, password: password.current });
    },
    [username, password]
  );

  const onChangeUsername = useCallback<FieldHandler>(
    ({ target }) => {
      username.current = target.value;
    },
    [username]
  );
  const onChangePassword = useCallback<FieldHandler>(
    ({ target }) => {
      password.current = target.value;
    },
    [password]
  );
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input name="username" type="text" onChange={onChangeUsername} />
      <input name="password" type="password" onChange={onChangePassword} />
      <button type="submit">Login</button>
    </form>
  );
}
