import React from 'react';
import { Link } from 'react-router-dom';
import style from './GrantDelete.module.css';
import { deleteData } from '../../../actions';
import { connect } from 'react-redux';
import NotFound from '../main-parts/404';
import firebase from '../../../Config';


function OrderDelete(props) {
  if (!props.admin) {
    return (
      <NotFound />
    );
  }
  const del = () => {
    let adaRef = firebase.database().ref('orders').child(props.item.id);
    adaRef.remove()
      .then(function () {
        console.log('Remove succeeded.');
      })
      .catch(function (error) {
        console.log('Remove failed: ' + error.message);
      });

  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Do you want to delete?</h1>
        <div className={style.buttons}>
          <Link to="/admin">Back</Link>
          <Link to="/admin" onClick={del}>Delete</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    item: state.selected[0],
    admin: state.admin[0],
  };
};

export default connect(mapStateToProps, { deleteData })(OrderDelete);
