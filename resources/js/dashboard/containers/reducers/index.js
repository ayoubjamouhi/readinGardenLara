import { combineReducers } from 'redux';

import isLogin from './isLogin';
// Gestion Journaux
import journaux from './journaux';
import contreparties from './contreparties';
// Gestion Fournisseurs
import fournisseurs from './fournisseurs';
// Gestion Plan Comptable
import plancomptables from './plancomptables';
// Gestion Succursale
import succursales from './succursales';
// Gestion Libelles
import libelles from './libelles';

const rootReducer = combineReducers({ journaux, isLogin, contreparties, fournisseurs, plancomptables, succursales, libelles });

export default rootReducer;
