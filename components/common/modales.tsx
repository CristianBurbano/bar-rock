import React, { useEffect, useState } from "react";
import { Modal as M, Button as B } from "react-bootstrap";
import { BehaviorSubject, firstValueFrom, Subject } from "rxjs";

type ButtonType = {
  title: string;
  style?: "primary" | "secondary";
  onClick: (close: Function) => any;
};

type ModalType = {
  title?: string;
  content: string | JSX.Element;
  open: boolean;
  onClose?: Function;
  onAccept?: Function;
  buttons?: ButtonType[];
};
export default function Modal({
  title,
  content,
  open = false,
  onClose,
  onAccept,
  buttons,
}: ModalType) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const Button = (props: ButtonType) => (
    <B
      variant={props.style ? props.style : "primary"}
      onClick={() => props.onClick(handleClose)}
    >
      {" "}
      {props.title}
    </B>
  );

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  const handleAccept = () => {
    setShow(false);
    if (onAccept) onAccept();
  };
  return (
    <>
      <M show={show} onHide={handleClose}>
        <M.Header closeButton>{title && <M.Title>{title}</M.Title>}</M.Header>
        <M.Body>{content}</M.Body>
        <M.Footer>
          {(buttons &&
            buttons.length > 0 &&
            buttons.map((b, i) => <Button {...b} />)) || (
            <B variant="primary" onClick={handleAccept}>
              Aceptar
            </B>
          )}
        </M.Footer>
      </M>
    </>
  );
}

export class Modales {
  $modales = new BehaviorSubject<JSX.Element[]>([]);
  modales: JSX.Element[] = [];
  constructor() {
    this.Container = this.Container.bind(this);
  }

  /**@todo debo hacer que una modal por defecto incorporando el subject, que es lo que se repite en todas las modales
   */

  defaultModal(props: ModalType): Subject<{ [key: string]: any }> {
    let $subject = new Subject<{ [key: string]: any }>();
    let modal = <Modal {...props} key={new Date().getTime()} />;
    this.addModal(modal);
    return $subject;
  }

  alert(props: AlertProps): Promise<{ [key: string]: any }> {
    let state: boolean = true;
    const setValue = (value: any, valueIfString = undefined): any => {
      return typeof props === "string" ? valueIfString : value;
    };

    let modalProps: ModalType = {
      title: setValue(undefined),
      content: setValue(undefined, props),
      open: state,
      onClose: onClose,
      onAccept: onClose,
    };

    let $subject = this.defaultModal(modalProps);

    function onClose() {
      $subject.next({ answer: true });
      $subject.complete();
    }

    return firstValueFrom($subject);
  }

  custom(props: ModalType) {
    return this.defaultModal(props);
  }

  public static confirm = () => {};

  Container({}: ContainerProps) {
    let [modales, setModales] = useState([] as JSX.Element[]);

    useEffect(() => {
      let subscription = this.$modales.subscribe((data) => {
        setModales([...data]);
      });
      return () => {
        subscription.unsubscribe();
      };
    }, []);
    return (
      <div>
        Este es el container de las modales
        <>{modales}</>
      </div>
    );
  }

  private addModal(modal: JSX.Element) {
    this.modales.push(modal);
    this.$modales.next(this.modales);
  }

  private removeModal(modal: JSX.Element) {
    let index = this.modales.indexOf(modal);
    if (index) this.modales.splice(index, 1);
  }
}
export const modales = new Modales();

type ContainerProps = {};
type AlertProps =
  | string
  | {
      title?: string;
      content: string | JSX.Element;
    };
