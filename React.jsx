/*
  Контрольная проверочная работа
  Федин Виктор, группа И-2-20(а)
*/

// Задание 1. Экспортируйте компонент. Примените экспорт по умолчанию.
function Profile() {
    return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}

export default Profile; // используем экспорт по умолчанию для нашего компонента Profile.

// Задание 2. Исправьте оператор return (возврата).
export default function Profile() {
    return (
        <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
    );
}

/*
    Ошибка заключалась в том, что последующий код оператора return должен был находиться в скобках.
    Иными словами, синтаксис оператора таков:
    return (
      // остальной код
    );
    Кроме того, мы также могли не использовать скобки и оставить точку с запятой в конце тега.
    От этого работа программы не изменилась.
*/

// Задание 3. Найдите и исправьте ошибку.
function Profile() {
    return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

/*
    Ошибка заключалась в том, что компонент Profile был написан с маленькой буквы,
    а не с большой, как обязывает нас синтаксис React.js. Соответственно, ошибка хранилась
    и в вызове этого компонента в Gallery.
*/

// Задание 4. Напишите Congratulations компонент, который возвращает текст <h1>Good job!</h1>. Выполните именованный экспорт.
import React from 'react';

// Компонент Congratulations 
const Congratulations = () => {
    return <h1>Good job!</h1>;
};

export default Congratulations; // именованный экспорт компонента

// Задание 5. Нижеприведенный код выдает ошибку Objects are not valid as a React child… . Исправьте ее.
const person = {
    name: 'Брендан Эйх',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    },
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name} – создатель языка программирования JS</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

/*
    Ошибка Objects are not valid as a React child… возникала из-за того,
    что в строке с тегом <h1> и тегом <div style={}> мы пытались вставить объект person напрямую,
    без указания конкретного свойства объекта.
*/

// Задание 6. Переместите URL-адрес изображения в person объект. Используйте соответствующее поле с URL-адресом в качестве значения атрибута src тега img.
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    },
    avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img className="avatar" src={person.avatarUrl} alt={person.name} />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

/*
    Для начала мы перенесли URL-адрес изображения в свойство объекта person под имя avatarUrl.
    Теперь img имеет атрибут src, который хранит в себе ссылку на изображение, получаемое из объекта person.
*/

// Задание 7. Отрегулируйте размер изображения на основе реквизита. В этом примере Avatar получает числовой size реквизит, определяющий <img>ширину и высоту. Измените Avatar компонент, чтобы он запрашивал ближайший размер изображения на основе реквизита size. В частности, если size меньше 90, передайте в функцию getImageUrl аргумент со значением 's'(«маленький»), иначе 'b' («большой»).
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
    const imageSize = size < 90 ? 's' : 'b';

    return (
        <img
            className="avatar"
            src={getImageUrl(person, imageSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <Avatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP',
            }}
        />
    );
}

/*
    В этом коде мы создали определение размера изображения на основе значения size.
    Теперь компонент выбирает размер изображения на основе предложенных размеров s или b
    и передает это значение в функцию getImageUrl.
*/

// Задание 8. Показывать значок ❌ для неупакованных элементов (значением isPacked является false), используя условный оператор ? :
function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked ? '✔' : '❌'}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    );
}

/*
    С помощью условного оператора ? : мы настроили отображение значка в зависимости от
    логического значения isPacked: true или false.
*/

// Задание 9. Исправьте обработчик событий. При нажатии на кнопку фон страницы должен переключаться между белым и черным. Однако при нажатии на нее ничего не происходит. Решить проблему. (Не беспокойтесь о внутренней логике handleClick— с этой частью все в порядке.)
export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return <button onClick={handleClick}>Toggle the lights</button>;
}

/*
    Проблема заключалась в том, что при вызове обработчика событий onClick мы вписали ее со скобочками.
    В итоге функция handleClick не вызывалась на onClick. Теперь фон изображения должен меняться по клику на кнопку.
*/

// Задание 10. Добавьте метод, предотвращающий поведение браузера по умолчанию, перезагрузку страницы.
export default function Signup() {
    function handleSubmit(event) {
        event.preventDefault();
        // любые действия
    }
    return (
        <form onSubmit={handleSubmit}>
            <input />
            <button type="submit">Send</button>
        </form>
    );
}

/*
    Мы используем функцию preventDefault для того, чтобы предотвратить поведение браузера по умолчанию.
    Теперь после отправки формы страница не должна перезагружаться, и соответственно должна выполняться
    функция handleSubmit.
*/

// Задание 11. В соответствии с кодом ниже, если вы нажмете на любую из кнопок, сначала сработает ее onClick, а затем onClick родительской <div>. Остановите распространение события.
export default function Toolbar() {
    function handleToolbarClick() {
        alert('При клике по кнопке это не должно вызываться!');
    }

    function handleButtonClick(event) {
        event.stopPropagation();

        if (event.target.textContent === 'Play Movie') {
            alert('Playing!');
        } else if (event.target.textContent === 'Upload Image') {
            alert('Uploading!');
        }
    }
    return (
        <div className="Toolbar" onClick={handleToolbarClick}>
            <button onClick={handleButtonClick}>Play Movie</button>
            <button onClick={handleButtonClick}>Upload Image</button>
        </div>
    );
}

/*
    С помощью метода stopPropagation мы предотвратили распространение клика с дочерних элементов на родительский.
    При правильной работе stopPropagation функция handleToolbarClick вызвана не будет.
*/

// Задание 12. Оба input имеют обработчики событий onChange, которые пытаются обновить переменные на основе последнего введенного пользователем значения (e.target.value). Однако переменные, похоже, не "запоминают" свои значения между повторными рендерингами. Исправьте это.
import React, { useState } from 'react';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>
                Hi, {firstName} {lastName}
            </h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}

/*
    Проблема заключалась в том, что переменные находились внутри компонента Form. Это приводило к тому,
    что при обновлении компонента после отправки формы эти переменные создавались заново. В этом коде я
    использовал хук useState для сохранения состояния компонента. 
*/

// Задание 13. Вот небольшая форма, которая должна позволить пользователю оставить отзыв. Когда отзыв отправлен, предполагается отобразить сообщение с благодарностью. Однако при этом происходит сбой с сообщением об ошибке: "Rendered lesser hooks than expected". Можете ли вы заметить ошибку и исправить ее?
import { useState } from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Sending: "${message}"`);
                    setIsSent(true);
                }}
            >
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}

/*
    В этом коде я переместил строчку const [message, setMessage] = useState(''); выше, чтобы
    хуки вызвались в одном и том же порядке и не изменились между рендерами. После этого ошибка
    Rendered lesser hooks than expected должна исчезнуть.
*/