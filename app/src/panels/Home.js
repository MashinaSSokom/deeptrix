import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar} from '@vkontakte/vkui';
import './Home.css'
import icon_color from '../img/Icon_color.png'
import banner from '../img/banner.png'

const Home = ({id, go, fetchedUser}) => {

    let [balance, setBalance] = useState(2000)
    let [goods, setGoods] = useState([
        {id: 1, name: 'Кепка модника', src: '../img/goods/kepka.png'},
        {id: 2, name: 'Кольцо удачи', src: '../img/goods/koltso_udachi.png'},
        {id: 3, name: 'Толстовка умника', src: '../img/goods/tolstovka.png'},
        {id: 4, name: 'Шапка счастья', src: '../img/goods/robin_gud.png'},
        {id: 5, name: 'Шляпа фермера', src: '../img/goods/solomennaya_shlyapa.png'},
        {id: 6, name: 'Очки умника', src: '../img/goods/ochki_umnika.png'},
    ])

    const handleBalanceClick = (e) => {
        console.log('Сбрасываем баланс')
        setBalance(2000)
    }

    return (
        <Panel id={id}>
            <PanelHeader separator={false}>
                <div className={'header-navbar'}>
                    <button mode={'secondary'}
                            className={'header-navbar__balance'}
                            onClick={handleBalanceClick}
                    >
                        <img src={icon_color}/>
                        {balance}
                    </button>
                    <div className={'header-navbar__title'}>
                        Магазин
                    </div>
                </div>
            </PanelHeader>
            <Group className={'banner'}>
                <Div>
                    <img src={banner} alt="" style={{
                        width: "100%",
                    }}/>
                </Div>
            </Group>


            {/*{fetchedUser &&*/}
            {/*    <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>*/}
            {/*        <Cell*/}
            {/*            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}*/}
            {/*            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}*/}
            {/*        >*/}
            {/*            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}*/}
            {/*        </Cell>*/}
            {/*    </Group>}*/}

            {/*<Group header={<Header mode="secondary">Navigation Example</Header>}>*/}
            {/*	<Div>*/}
            {/*		<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">*/}
            {/*			Show me the Persik, please*/}
            {/*		</Button>*/}
            {/*	</Div>*/}
            {/*</Group>*/}
        </Panel>
    )
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
