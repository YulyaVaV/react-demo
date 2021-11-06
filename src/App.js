import React from 'react';
import './App.scss';
import { Input } from './components/Input/Input';
import { Pay } from './components/Pay/Pay';
import { Service } from './components/Service/Service'

import palm from './icon/abhaya-mudra.png'
import purse from './icon/purse.png'
import clothes from './icon/clothes.png'
import heart from './icon/heart.png'

import visa from './icon/visa-logo.png'
import privat from './icon/24-hours.png'
import terminal from './icon/bank-terminal.png'
import webmoney from './icon/symbols.png'
import paypal from './icon/paypal.png'

export const App = () => {
  return (
    <div className="App">
      <h1 className="title">Заповніть форму</h1>
      <div className="person_button">
        <button
          type="button"
          className="person_button-item person_button-button_1"
        >
          Фіз.особа
        </button>
        <button
          type="button"
          className="person_button-item person_button-button_2"
        >
          Юр.особа
        </button>
      </div>
      <form
        className="todo__form"
      >
      <div className="form">
        <div className="form_wrapp">
          <Input label={`Ім'я`}/>
          <Input label={`Фамілія`}/>
        </div>

        <div className="form_organization">
          <Input
            label={`Назва компанії, організації`}
          />
            <button className="form_organization-button">+ Логотип</button>
        </div>
          <Input label={`Email-адреса`}/>
          <Input label={`Номер телефону`}/>
      </div>

      <div className="form">
          <Input label={`Країна`}/>
        <div className="form_wrapp">
          <Input label={`Місто`}/>
          <Input label={`Штат, район`}/>
        </div>
          <Input label={`Адреса`}/>
        <div className="form_post">
          <Input label={`Поштовий індекс`}/>
        </div>
      </div>
      </form>

      <div className="service_container">
        <h1 className="title">Види допомоги</h1>
        <p className="title_down">Ви можете змінити вид допомоги</p>
        <div className="service_container-images">
          <Service
            url={palm}
            text={'Зробити'}
          />
          <Service
            url={purse}
            text={'Фінансова допомога'}
            active={true}
            able={true}
          />
          <Service
            url={clothes}
            text={'Матеріальна допомога'}
          />
          <Service
            url={heart}
            text={'Волонтерство'}
          />
        </div>
      </div>

      <div className="pay">
        <div className="pay_container">
          <p className="pay_title">Спосіб оплати</p>
          <div className="pay_wrapp">
            <Pay
              img={visa}
              text={'Карта Visa/Mastercard'}
            />
            <Pay
              img={privat}
              text={'Приват 24'}
              active={true}
            />
            <Pay
              img={terminal}
              text={'Термінали України'}
            />
            <Pay
              img={webmoney}
              text={'WebMoney'}
            />
            <Pay
              img={paypal}
              text={'PayPal'}
            />
          </div>
        </div>

        <div className="data">
            <p className="pay_title">Введіть наступні данні</p>
            <div className="data_wrapp">

             <div className="data_card">
               <p className='data_name'>Номер карти</p>
               <div className='data_container'>
                 <input
                 className="data_field"
               />
                <input
                 className="data_field"
               />
                <input
                 className="data_field"
               />
                <input
                 className="data_field"
               />
               </div>
             </div>
             <div className="data_term">
               <div className="data_term-container">
               <p className="data_name">Термін дії</p>
             
               <input
                 className="data_action"
               />
               </div>
               <div className="data_term-container">
                 <p className="data_name">CVC/CVV</p>
                 <input
                   className="data_cvc"
                 />
               </div>
             </div>
            </div>
          </div>
      </div>
      <button className="service_button">Допомогти</button>
    </div>
  );
};

export default App;
