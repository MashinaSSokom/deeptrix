import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Icon24HomeOutline, Icon28TagOutline, Icon24PawOutline} from '@vkontakte/icons';
import {
    Panel,
    PanelHeader,
    Header,
    Button,
    Group,
    Cell,
    Div,
    Avatar,
    HorizontalScroll,
    HorizontalCell, Tabbar, TabbarItem, Badge
} from '@vkontakte/vkui';
import './Shop.css'
import icon_color from '../img/Icon_color.png'
import banner from '../img/banner.jpg'

const Shop = ({id, go, activePanel}) => {
    let [balance, setBalance] = useState(2000)
    let [goods, setGoods] = useState([
        {id: 1, name: 'Кепка модника', src: require('../img/goods/kepka.png').default, price: 300, section: 'Одежда'},
        {
            id: 2,
            name: 'Кольцо удачи',
            src: require('../img/goods/koltso_udachi.png').default,
            price: 500,
            section: 'Одежда'
        },
        {
            id: 3,
            name: 'Толстовка умника',
            src: require('../img/goods/tolstovka.png').default,
            price: 500,
            section: 'Одежда'
        },
        {
            id: 4,
            name: 'Шапка счастья',
            src: require('../img/goods/robin_gud.png').default,
            price: 500,
            section: 'Одежда'
        },
        {
            id: 5,
            name: 'Шляпа фермера',
            src: require('../img/goods/solomennaya_shlyapa.png').default,
            price: 500,
            section: 'Одежда'
        },
        {
            id: 6,
            name: 'Очки умника',
            src: require('../img/goods/ochki_umnika.png').default,
            price: 500,
            section: 'Одежда'
        },
    ])
    let [section, setSection] = useState('Одежда')
    let [allSections, setAllSections] = useState([
        {id: 1, name: 'Одежда'},
        {id: 2, name: 'Еда'},
        {id: 3, name: 'Бустеры'},
        {id: 4, name: 'Валюта'},
        {id: 5, name: 'Оружие'},
        {id: 6, name: 'Ящики'},])
    useEffect(() => {
        console.log(Array.isArray(allSections))
    }, [])
    const handleBalanceClick = (e) => {
        console.log('Сбрасываем баланс')
        setBalance(2000)
    }
    const changeSection = (e) => {
        setSection(e.target.textContent)
    }
    const handleProductCardClick = (price) => {
        if (balance >= price) {
            setBalance(balance - price)
        } else {
            alert('Недостаточно средств')
        }
    }

    return (
        <Panel id={id}>
            <PanelHeader separator={false}>
                <div className={'header-navbar'}>
                    <button mode={'secondary'}
                            className={'header-navbar__balance'}
                            onClick={handleBalanceClick}
                    >
                        <img src={icon_color} alt={"Баланс"}/>
                        {balance}
                    </button>
                    <div className={'header-navbar__title'}>
                        Магазин
                    </div>
                </div>
            </PanelHeader>
            <Group className={'banner'}
                   separator={"hide"}
            >
                <Div>
                    <img src={banner} alt="" style={{
                        width: "100%",
                    }}/>
                    <span className={'banner__header'}>
                        Встречайте Хэллоуин!
                    </span>
                </Div>
            </Group>
            <Group>
                <HorizontalScroll showArrows
                                  getScrollToLeft={(i) => i - 120}
                                  getScrollToRight={(i) => i + 120}
                >
                    <div style={{display: "flex"}}>
                        {allSections && allSections.map((item) => {
                            return (
                                <HorizontalCell key={item.id} size={'m'}>
                                    <Button mode={item.name === section ? 'primary' : 'secondary'}
                                            onClick={changeSection}
                                    >
                                        {item.name}
                                    </Button>
                                </HorizontalCell>
                            )
                        })}
                    </div>
                </HorizontalScroll>
            </Group>
            <Group header={<Header mode="tertiary">{section}</Header>}>
                <Div className={'products'}>
                    {goods.filter(item => item.section === section).map(item => {
                        return (
                            <div key={item.id} className={'product-card'}>
                                <img className={'product-card__image'}
                                     src={item.src}
                                     alt=""
                                />
                                <div className={'product-card__name'}>
                                    {item.name}
                                </div>
                                <div className={'product-card__price'}>
                                    <button onClick={() => handleProductCardClick(item.price)}>
                                        <img src={icon_color} alt={'Стоимость'}/>
                                        {item.price}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </Div>
            </Group>

            <Tabbar >
                <TabbarItem
                    selected={activePanel === "home"}
                    // onClick={go}
                    data-to="home"
                    // indicator={<Badge mode="prominent" />}
                >
                    <Icon24HomeOutline width={36} height={36}/>
                </TabbarItem>
                <TabbarItem
                    selected={activePanel === "pet"}
                    // onClick={go}
                    data-to="pet"
                >
                    <Icon24PawOutline width={36} height={36}/>
                </TabbarItem>
                <TabbarItem
                    selected={activePanel === "shop"}
                    onClick={go}
                    data-to="shop"
                >
                    <Icon28TagOutline width={36} height={36}/>
                </TabbarItem>
            </Tabbar>
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

Shop.propTypes = {
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

export default Shop;
