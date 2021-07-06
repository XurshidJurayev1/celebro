import React, { useEffect, useReducer } from 'react'
import { Link, Redirect } from 'react-router-dom'
import style from './Date.module.css'
import Step from '../Steps/Step';
import { connect } from 'react-redux'
import { fetchDateTime } from '../../actions'
import {useTranslation} from 'react-i18next'
import { AiOutlineRight, AiOutlineDoubleRight, AiOutlineVerticalAlignBottom } from 'react-icons/ai'

const initialState = {
    date: '',
    time: '',
    clickedData: null,
    clickedTime: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICKED_DATA':
            return {
                ...state, clickedData: action.payload, date: action.data
            }
        case 'CLICKED_TIME':
            return {
                ...state, clickedTime: action.payload, time: action.data
            }
        default:
            break;
    }
}



const DateRender = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {t}=useTranslation();


    useEffect(() => {
        const putData = () => {
            props.dateTime && dispatch({ type: 'CLICKED_DATA', payload: props.dateTime.clickedData, data: props.dateTime.date })
            props.dateTime && dispatch({ type: 'CLICKED_TIME', payload: props.dateTime.clickedTime, data: props.dateTime.time })
        }
        putData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.main}>
            {
                props.serviceType.length === 0 && <Redirect push to="/services" />
            }
            <div className={style.container}>
                <h1>{t("date.h1")}</h1>
                <h3>{t("date.h3")}</h3>
                <Step count={3} />

                <div className={style.form}>
                    <h1>{t("date.form.h1")}</h1>
                    <h2>{t("date.form.h2")}</h2>
                    <div className={style.cards}>
                        <div className={state.clickedData === 1 ? `${style.card} ${style.active}` : `${style.card}`} onClick={() => dispatch({ type: 'CLICKED_DATA', payload: 1, data: 'Today' })}>
                            <AiOutlineVerticalAlignBottom />
                            <h3>{t("date.form.today")}</h3>
                        </div>
                        <div className={state.clickedData === 2 ? `${style.card} ${style.active}` : `${style.card}`} onClick={() => dispatch({ type: 'CLICKED_DATA', payload: 2, data: 'Tomorrow' })}>
                            <AiOutlineRight />
                            <h3>{t("date.form.tomorrow")}</h3>
                        </div>
                        <div className={state.clickedData === 3 ? `${style.card} ${style.active}` : `${style.card}`} onClick={() => dispatch({ type: 'CLICKED_DATA', payload: 3, data: 'Next Tomorrow' })}>
                            <AiOutlineDoubleRight />
                            <h3>{t("date.form.nexttomorrow")}</h3>
                        </div>
                    </div>
                    <h2>Вақтни танланг</h2>
                    <div className={style.cards}>
                        <div className={state.clickedTime === 1 ? `${style.card} ${style.active}` : `${style.card}`} onClick={() => dispatch({ type: 'CLICKED_TIME', payload: 1, data: '8AM - 12PM' })}>
                            <AiOutlineVerticalAlignBottom />
                            <h3>{t("date.form.time1")}</h3>
                        </div>
                        <div className={state.clickedTime === 2 ? `${style.card} ${style.active}` : `${style.card}`} onClick={() => dispatch({ type: 'CLICKED_TIME', payload: 2, data: '12AM - 5PM' })}>
                            <AiOutlineRight />
                            <h3>{t("date.form.time2")}</h3>
                        </div>
                        <div className={state.clickedTime === 3 ? `${style.card} ${style.active}` : `${style.card}`} onClick={() => dispatch({ type: 'CLICKED_TIME', payload: 3, data: '5PM - 8PM' })}>
                            <AiOutlineDoubleRight />
                            <h3>{t("date.form.time3")}</h3>
                        </div>
                    </div>
                    {
                        state.date && state.time && <Link onClick={() => props.fetchDateTime(state)} to='/service/information'>
                        {t("date.form.continue")}
                    </Link>
                    }
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = state => {
    return {
        dateTime: state.dateTime,
        serviceType: state.serviceType,
    }
}

export default connect(mapStateToProps, { fetchDateTime })(DateRender)
