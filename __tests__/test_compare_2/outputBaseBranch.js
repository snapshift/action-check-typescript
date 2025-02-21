"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputBaseBranch = void 0;
exports.outputBaseBranch = `
server/absences/getCalendarJF.ts(145,55): error TS2345: Argument of type 'LastCnt' is not assignable to parameter of type 'SelectionPeriaDataCnt'.
  Type 'LastCnt' is missing the following properties from type 'SelectionPeriaDataCnt': catc_id, src_id
server/api/CRUD/router.ts(44,54): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'ExtParamsGenericRead'.
  Property 'modelName' is missing in type '{ [key: string]: any; }' but required in type 'ExtParamsGenericRead'.
server/api/CRUD/router.ts(63,35): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/CRUD/router.ts(82,53): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'ExtParamsGenericAdd'.
  Property 'modelName' is missing in type '{ [key: string]: any; }' but required in type 'ExtParamsGenericAdd'.
server/api/CRUD/router.ts(103,63): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'ExtParamsGenericDelete'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'ExtParamsGenericDelete': idToRemove, modelName
server/api/CRUD/services/Generic.ts(73,42): error TS2345: Argument of type '{ operator: "CANCEL"; }' is not assignable to parameter of type 'ListIterateeCustom<ClientFilter, boolean> | undefined'.
  Types of property 'operator' are incompatible.
    Type '"CANCEL"' is not assignable to type 'FilterOperator | undefined'.
server/api/CRUD/services/Generic.ts(94,58): error TS2345: Argument of type 'ExtParamsGenericRead' is not assignable to parameter of type 'BuildQueryParams'.
  Types of property 'filter' are incompatible.
    Type 'ClientFilter[] | undefined' is not assignable to type 'Filter[] | undefined'.
      Type 'ClientFilter[]' is not assignable to type 'Filter[]'.
        Type 'ClientFilter' is not assignable to type 'Filter'.
          Types of property 'value' are incompatible.
            Type 'FilterValue | FilterValue[]' is not assignable to type 'string | number | boolean | null'.
              Type 'FilterValue[]' is not assignable to type 'string | number | boolean | null'.
                Type 'FilterValue[]' is not assignable to type 'string'.
server/api/CRUD/services/getDemandesAbsSalList.ts(60,13): error TS2322: Type '"ouvrés"' is not assignable to type 'TypeMethode'.
server/api/CRUD/services/getSubordinates.ts(58,5): error TS2783: 'level' is specified more than once, so this usage will be overwritten.
server/api/CRUD/services/getTimesheetsToValidateForSubordinates.ts(34,51): error TS6133: 'params' is declared but its value is never read.
server/api/CRUD/services/getTimesheetsValidatedForSubordinates.ts(34,51): error TS6133: 'params' is declared but its value is never read.
server/api/absences/compteurs/services/calculateCpRestants.ts(31,21): error TS2345: Argument of type '{ cml_id: number; cml_unite: number; cml_code: string; cml_lib: string; val_annuelle: number; }' is not assignable to parameter of type 'Cumul'.
  Type '{ cml_id: number; cml_unite: number; cml_code: string; cml_lib: string; val_annuelle: number; }' is missing the following properties from type 'Cumul': val_bul, val_duree_contrat
server/api/absences/compteurs/services/calculateCpRestants.ts(44,21): error TS2345: Argument of type '{ cml_id: number; cml_unite: number; cml_code: string; cml_lib: string; val_annuelle: number; }' is not assignable to parameter of type 'Cumul'.
  Type '{ cml_id: number; cml_unite: number; cml_code: string; cml_lib: string; val_annuelle: number; }' is missing the following properties from type 'Cumul': val_bul, val_duree_contrat
server/api/absences/compteurs/services/calculateCpRestants.ts(57,21): error TS2345: Argument of type '{ cml_id: number; cml_unite: number; cml_code: string; cml_lib: string; val_annuelle: number; }' is not assignable to parameter of type 'Cumul'.
  Type '{ cml_id: number; cml_unite: number; cml_code: string; cml_lib: string; val_annuelle: number; }' is missing the following properties from type 'Cumul': val_bul, val_duree_contrat
server/api/absences/services/crudTriggerBeforeValidateAbsence.ts(25,9): error TS2322: Type '{ typeMessage: "warning"; isValid: false; explain: string; } | { typeMessage: "warning"; isValid: true; }' is not assignable to type 'ResultTriggerValidationBefore'.
  Type '{ typeMessage: "warning"; isValid: true; }' is not assignable to type 'ResultTriggerValidationBefore'.
    Object literal may only specify known properties, and 'typeMessage' does not exist in type 'ResultTriggerValidationBeforeValid'.
server/api/absences/services/generateDabsFromAbs.ts(108,39): error TS2345: Argument of type '{ user: { uti_id: number; }; operationType: "add"; }' is not assignable to parameter of type 'Query'.
  Types of property 'operationType' are incompatible.
    Type '"add"' is not assignable to type 'OperationType'.
server/api/absences/services/getDataGtaAndRem.ts(63,19): error TS2741: Property 'catc_id' is missing in type '{ src_id: number; pad_id: number; ppa: Schema.pay_periodepaye_ppa; current_bul: { pare: Schema.pay_paramprofprem_pare | null; pacp: Schema.pay_paramprofprcp_pacp | null; ppla: Schema.gta_profilplanning_ppla | null; } | null; cnt_soldetc_mdp_id: number; ncnt_id: number; grp_id: Schema.pay_contrat_cntFields.grp_id; cnt_preavis_noneffnonpaye: boolean; cnt_preavis_noneffpaye: boolean; cnt_preavis_noneffnonpaye_datedebut: Schema.pay_contrat_cntFields.cnt_preavis_noneffnonpaye_datedebut; cnt_preavis_noneffnonpaye_datefin: Schema.pay_contrat_cntFields.cnt_preavis_noneffnonpaye_datefin; cnt_preavis_noneffpaye_datedebut: Schema.pay_contrat_cntFields.cnt_preavis_noneffpaye_datedebut; cnt_preavis_noneffpaye_datefin: Schema.pay_contrat_cntFields.cnt_preavis_noneffpaye_datefin; cnt_id: number; cnt_debut_date: Date; cnt_fin_date: Schema.pay_contrat_cntFields.cnt_fin_date; cnt_datefin_prevue: Schema.pay_contrat_cntFields.cnt_datefin_prevue; cnt_datefin_essai: Schema.pay_contrat_cntFields.cnt_datefin_essai; cnt_preavis_fait: boolean; cnt_date_notification: Schema.pay_contrat_cntFields.cnt_date_notification; cnt_preavisfait_date_debut: Schema.pay_contrat_cntFields.cnt_preavisfait_date_debut; cnt_preavisfait_date_fin: Schema.pay_contrat_cntFields.cnt_preavisfait_date_fin; eta_id: number; sal_id: number; mtf_id: Schema.pay_contrat_cntFields.mtf_id; cnt_acompte_mdp_id: number; cnt_salaire_mdp_id: number; lot_id: Schema.pay_contrat_cntFields.lot_id; cnt_num: Schema.pay_contrat_cntFields.cnt_num; rcdd_id: Schema.pay_contrat_cntFields.rcdd_id; prof_id_prem_force: Schema.pay_contrat_cntFields.prof_id_prem_force; prof_id_prss_force: Schema.pay_contrat_cntFields.prof_id_prss_force; dpub_id: Schema.pay_contrat_cntFields.dpub_id; semp_id: number; cnt_quot_trav: Schema.pay_contrat_cntFields.cnt_quot_trav; cnt_a_quot_trav_specifique: boolean; cnt_quot_trav_spec_raison: Schema.pay_contrat_cntFields.cnt_quot_trav_spec_raison; prof_id_prcp_force: Schema.pay_contrat_cntFields.prof_id_prcp_force; pare_id_force: Schema.pay_contrat_cntFields.pare_id_force; pacp_id_force: Schema.pay_contrat_cntFields.pacp_id_force; pass_id_force: Schema.pay_contrat_cntFields.pass_id_force; cnt_simul: boolean; cnt_id_externe: Schema.pay_contrat_cntFields.cnt_id_externe; cnt_datefin_duree_minimale: Schema.pay_contrat_cntFields.cnt_datefin_duree_minimale; cnt_rempla_sal_libre: Schema.pay_contrat_cntFields.cnt_rempla_sal_libre; cnt_rempla_sal_id: Schema.pay_contrat_cntFields.cnt_rempla_sal_id; cnt_sans_terme_precis: boolean; euti_id: Schema.pay_contrat_cntFields.euti_id; src_id_force: Schema.pay_contrat_cntFields.src_id_force; ccn_id_euti_force: Schema.pay_contrat_cntFields.ccn_id_euti_force; sat_id_force: Schema.pay_contrat_cntFields.sat_id_force; cnt_reprise_date_fin_traitement: Schema.pay_contrat_cntFields.cnt_reprise_date_fin_traitement; prtt_id_force: Schema.pay_contrat_cntFields.prtt_id_force; spec_id: Schema.pay_contrat_cntFields.spec_id; cdpre_id: Schema.pay_contrat_cntFields.cdpre_id; cnt_cdpre_date_fin: Schema.pay_contrat_cntFields.cnt_cdpre_date_fin; pifc_id_force: Schema.pay_contrat_cntFields.pifc_id_force; prbul_id_force: Schema.pay_contrat_cntFields.prbul_id_force; ppla_id_force: Schema.pay_contrat_cntFields.ppla_id_force; prui_id_force: Schema.pay_contrat_cntFields.prui_id_force; prga_id_force: Schema.pay_contrat_cntFields.prga_id_force; prgp_id_force: Schema.pay_contrat_cntFields.prgp_id_force; cnt_ts_exo: boolean; cnt_heure_embauche: Schema.pay_contrat_cntFields.cnt_heure_embauche; cnt_dpae_dateheure_gene: Schema.pay_contrat_cntFields.cnt_dpae_dateheure_gene; cnt_rupconv_date_signature: Schema.pay_contrat_cntFields.cnt_rupconv_date_signature; cnt_lic_date_eng_procedure: Schema.pay_contrat_cntFields.cnt_lic_date_eng_procedure; cnt_aed_statut_particulier: Schema.pay_contrat_cntFields.cnt_aed_statut_particulier; cnt_transaction_statut: Schema.pay_contrat_cntFields.cnt_transaction_statut; cnt_heure_fin: Schema.pay_contrat_cntFields.cnt_heure_fin; cnt_heure_embauche_reelle: Schema.pay_contrat_cntFields.cnt_heure_embauche_reelle; mnvi_id: Schema.pay_contrat_cntFields.mnvi_id; cnt_prevenance_effpaye: boolean; cnt_prevenance_effpaye_datedebut: Schema.pay_contrat_cntFields.cnt_prevenance_effpaye_datedebut; cnt_prevenance_effpaye_datefin: Schema.pay_contrat_cntFields.cnt_prevenance_effpaye_datefin; cnt_prevenance_noneffpaye: boolean; cnt_prevenance_noneffpaye_datedebut: Schema.pay_contrat_cntFields.cnt_prevenance_noneffpaye_datedebut; cnt_prevenance_noneffpaye_datefin: Schema.pay_contrat_cntFields.cnt_prevenance_noneffpaye_datefin; cnt_justif_recours_cdd: Schema.pay_contrat_cntFields.cnt_justif_recours_cdd; cnt_debut_periode_souplesse: Schema.pay_contrat_cntFields.cnt_debut_periode_souplesse; cnt_fin_periode_souplesse: Schema.pay_contrat_cntFields.cnt_fin_periode_souplesse; pcpa_id_force: Schema.pay_contrat_cntFields.pcpa_id_force; cnt_date_envoi: Schema.pay_contrat_cntFields.cnt_date_envoi; cnt_date_reception: Schema.pay_contrat_cntFields.cnt_date_reception; cnt_euti_date_envoi: Schema.pay_contrat_cntFields.cnt_euti_date_envoi; cnt_euti_date_reception: Schema.pay_contrat_cntFields.cnt_euti_date_reception; sal_id_tuteur: Schema.pay_contrat_cntFields.sal_id_tuteur; cnt_der_jour_trav: Schema.pay_contrat_cntFields.cnt_der_jour_trav; cnt_datefin_essai_renouv: Schema.pay_contrat_cntFields.cnt_datefin_essai_renouv; cnt_infos_comp: Schema.pay_contrat_cntFields.cnt_infos_comp; cnt_notes: Schema.pay_contrat_cntFields.cnt_notes; trem_id: Schema.pay_contrat_cntFields.trem_id; ett_id: Schema.pay_contrat_cntFields.ett_id; cnt_est_retraite_reprise_activite: boolean; cnt_date_paiement_stc: Schema.pay_contrat_cntFields.cnt_date_paiement_stc; }' but required in type 'SelectionPeriaDataCnt'.
server/api/absences/services/getDataGtaAndRem.ts(105,13): error TS2322: Type 'pay_paramprofprem_pare[]' is not assignable to type 'Pare[]'.
  Type 'pay_paramprofprem_pare' is missing the following properties from type 'Pare': acrd_niveau, trem_dsn_code, pare_desc, origin
server/api/absences/services/getDataGtaAndRem.ts(107,13): error TS2322: Type 'pay_paramprofprcp_pacp[]' is not assignable to type 'ProfilCp[]'.
  Type 'pay_paramprofprcp_pacp' is missing the following properties from type 'ProfilCp': macp, pacp_desc, origin, acrd_niveau
server/api/absences/services/getDataGtaAndRem.ts(112,13): error TS2741: Property 'ppla_desc' is missing in type '{ plhSemaine1?: Plh | undefined; }' but required in type 'DataGtaWithPplaDesc'.
server/api/absences/services/getInfosAbsences.ts(13,11): error TS2320: Interface 'DemandeAbsence' cannot simultaneously extend types 'wfl_demande_wdm' and 'wfl_type_wft'.
  Named property 'pad_id' of types 'wfl_demande_wdm' and 'wfl_type_wft' are not identical.
server/api/absences/services/getInfosAbsencesManager.ts(33,11): error TS2320: Interface 'Data' cannot simultaneously extend types 'wfl_demande_wdm' and 'wfl_type_wft'.
  Named property 'pad_id' of types 'wfl_demande_wdm' and 'wfl_type_wft' are not identical.
server/api/absences/services/validateAbsence.ts(17,9): error TS2322: Type '{ isValid: false; explain: string; }' is not assignable to type 'ResultTriggerValidationBefore'.
  Property 'typeMessage' is missing in type '{ isValid: false; explain: string; }' but required in type 'ResultTriggerValidationBeforeNotValid'.
server/api/absences/services/validateAbsence.ts(30,74): error TS2345: Argument of type 'Abs' is not assignable to parameter of type 'pay_absence_abs'.
  Types of property 'abs_id' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
server/api/absences/services/validateAbsencesAgainstLimitations.ts(63,45): error TS2339: Property 'total_nb' does not exist on type 'pay_absence_abs | AbsenceWithTotalNbDab'.
  Property 'total_nb' does not exist on type 'pay_absence_abs'.
server/api/absences/services/validateAbsencesAgainstLimitations.ts(63,60): error TS2339: Property 'total_nb' does not exist on type 'pay_absence_abs | AbsenceWithTotalNbDab'.
  Property 'total_nb' does not exist on type 'pay_absence_abs'.
server/api/absences/services/validateAbsencesAgainstLimitations.ts(85,5): error TS2322: Type '{ isValid: boolean; explain: string; }' is not assignable to type 'ResultTriggerValidationBefore'.
  Property 'typeMessage' is missing in type '{ isValid: boolean; explain: string; }' but required in type 'ResultTriggerValidationBeforeNotValid'.
server/api/assistantEmbauche/services/createNewCnt.ts(2,1): error TS6133: 'pg' is declared but its value is never read.
server/api/assistantEmbauche/services/createNewHiring.ts(124,46): error TS2345: Argument of type 'HiringData' is not assignable to parameter of type 'DataToInsert'.
  Property 'posc_id' is missing in type 'HiringData' but required in type 'DataToInsert'.
server/api/assistantEmbauche/services/processOneTitre.ts(6,18): error TS2430: Interface 'Ttra' incorrectly extends interface 'pay_titretrav_ttra'.
  Types of property 'ttra_id' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
server/api/bullBoard/router.ts(24,9): error TS2322: Type 'BullMQAdapter' is not assignable to type 'QueueAdapter'.
  The types returned by 'getClient()' are incompatible between these types.
    Type 'Promise<RedisClient>' is not assignable to type 'Promise<Redis>'.
      Type 'RedisClient' is not assignable to type 'Redis'.
        Type 'Cluster' is missing the following properties from type 'Redis': Promise, send_command
server/api/bullBoard/router.ts(53,43): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[]' is not assignable to parameter of type 'string'.
  Type 'string[]' is not assignable to type 'string'.
server/api/buls/services/createBulsAfterClosing.ts(66,45): error TS2345: Argument of type '{ ppa: PpaCour; sal_id: number; cnt_id: number; cnt_salaire_mdp_id: number; cnt_debut_date: Date; cnt_fin_date: cnt_fin_date; cnt_date_paiement_stc: cnt_date_paiement_stc; pad_id: number; }[]' is not assignable to parameter of type 'CntForUpsertBul[]'.
  Type '{ ppa: PpaCour; sal_id: number; cnt_id: number; cnt_salaire_mdp_id: number; cnt_debut_date: Date; cnt_fin_date: pay_contrat_cntFields.cnt_fin_date; cnt_date_paiement_stc: pay_contrat_cntFields.cnt_date_paiement_stc; pad_id: number; }' is not assignable to type 'CntForUpsertBul'.
    The types of 'ppa.ppa_datedebut' are incompatible between these types.
      Type 'Date' is not assignable to type 'string'.
server/api/buls/services/triggerControles.ts(58,36): error TS2345: Argument of type 'pay_controle_ctrl' is not assignable to parameter of type 'Controle'.
  Types of property 'ctrl_query' are incompatible.
    Type 'ctrl_query' is not assignable to type 'string'.
      Type 'null' is not assignable to type 'string'.
server/api/calculations/router.ts(73,11): error TS2322: Type '{ uti_id: number; settings: { shouldDisplayTechnicalInfos: boolean; debug?: { debugAll: boolean; aRubId?: number[] | undefined; saveRubPrevSkipped?: boolean | undefined; } | undefined; }; type: 1; pad_id: number; bul_id: number[]; clp_origine: number; settingsByBul?: { bulId: number; netAuBrut?: { modeNet: number; netCible?: number | null | undefined; netAAjouter?: number | null | undefined; varId: number; saveValeurCible: boolean; } | undefined; }[] | undefined; }' is not assignable to type 'CalcRequestParams'.
  Types of property 'settingsByBul' are incompatible.
    Type '{ bulId: number; netAuBrut?: { modeNet: number; netCible?: number | null | undefined; netAAjouter?: number | null | undefined; varId: number; saveValeurCible: boolean; } | undefined; }[] | undefined' is not assignable to type '{ bulId: number; netAuBrut?: { modeNet: number; netCible?: number | null | undefined; netAAjouter?: number | null | undefined; varId: number; } | undefined; }[]'.
      Type 'undefined' is not assignable to type '{ bulId: number; netAuBrut?: { modeNet: number; netCible?: number | null | undefined; netAAjouter?: number | null | undefined; varId: number; } | undefined; }[]'.
server/api/calculations/router.ts(88,9): error TS2322: Type '{ messages: any; data: CalcRequestResult; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/calculations/services/calculateFractions.ts(92,16): error TS2790: The operand of a 'delete' operator must be optional.
server/api/calculations/services/clearCompletedCalcs.ts(35,9): error TS2322: Type 'null' is not assignable to type 'Calc'.
server/api/calculations/services/handleCalculationRequest.ts(47,33): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/calculations/services/startCalc.ts(19,33): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/calculations/services/startCalc.ts(29,39): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/calculations/services/startCalc.ts(75,16): error TS2790: The operand of a 'delete' operator must be optional.
server/api/calculations/services/updateBuls.ts(61,13): error TS2345: Argument of type '(err: any, results: any) => void' is not assignable to parameter of type 'ErrorCallback<any>'.
server/api/clotures/services/checkBadBulletins.ts(4,1): error TS6133: 'PoolClient' is declared but its value is never read.
server/api/compta/services/initComptesDefaut.ts(250,56): error TS2345: Argument of type 'Nullable<Partial<pay_lienrgcpad_rgd>>' is not assignable to parameter of type 'DataForInsert<pay_lienrgcpad_rgd>'.
  Types of property 'rgd_id' are incompatible.
    Type 'number | null | undefined' is not assignable to type 'number | undefined'.
      Type 'null' is not assignable to type 'number | undefined'.
server/api/contrats/contratsByAffaire/router.ts(28,83): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Data'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'Data': padId, affId, mctId, modeCreationContrats, and 2 more.
server/api/contrats/contratsByAffaire/services/createContratsByAffaire.ts(159,15): error TS2741: Property 'posc_id' is missing in type '{ emp_id: number; ech_id: number; nivc_id: number; cnt_debut_date: Date; cnt_fin_date: Date; acrd_id: null; }' but required in type 'DataToInsert'.
server/api/contrats/router.ts(62,36): error TS2345: Argument of type '{ semp_id: number; pad_id: number; }' is not assignable to parameter of type 'Readonly<Input>'.
  Type '{ semp_id: number; pad_id: number; }' is missing the following properties from type 'Readonly<Input>': ncnt_id, dpub_id, trem_id, rcdd_id, and 4 more.
server/api/contrats/router.ts(132,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/contrats/router.ts(135,20): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/contrats/router.ts(219,120): error TS2339: Property 'cntIds' does not exist on type 'object'.
server/api/contrats/services/GetInfosCnt.ts(121,51): error TS2454: Variable 'posConv' is used before being assigned.
server/api/contrats/services/GetInfosCnt.ts(122,13): error TS2322: Type 'number | null | undefined' is not assignable to type 'number | null'.
server/api/contrats/services/GetInfosCnt.ts(123,13): error TS2322: Type 'number | null | undefined' is not assignable to type 'number | null'.
server/api/contrats/services/GetInfosCnt.ts(123,22): error TS2454: Variable 'posConv' is used before being assigned.
server/api/contrats/services/GetInfosCnt.ts(150,34): error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type 'unknown' is not assignable to parameter of type 'object | null | undefined'.
      Type 'unknown' is not assignable to type 'object'.
server/api/contrats/services/GetInfosCnt.ts(159,24): error TS2571: Object is of type 'unknown'.
server/api/contrats/services/GetInfosCnt.ts(171,13): error TS2322: Type 'unknown' is not assignable to type 'ResultProfilRemAuto'.
server/api/contrats/services/GetInfosCnt.ts(172,13): error TS2322: Type 'unknown' is not assignable to type 'ResultProfilCpAuto'.
server/api/contrats/services/GetInfosCnt.ts(173,13): error TS2322: Type 'unknown' is not assignable to type 'ResultProfilSsAuto'.
server/api/contrats/services/GetInfosCnt.ts(177,29): error TS2571: Object is of type 'unknown'.
server/api/contrats/services/GetInfosCnt.ts(179,34): error TS2339: Property 'aRpadSelected' does not exist on type 'Readonly<Input>'.
server/api/contrats/services/GetInfosCnt.ts(180,35): error TS2339: Property 'aPeriaSelected' does not exist on type 'Readonly<Input>'.
server/api/contrats/services/GetInfosCnt.ts(183,13): error TS2322: Type 'unknown' is not assignable to type 'ResultPrttAuto'.
server/api/contrats/services/GetInfosCnt.ts(184,13): error TS2322: Type 'unknown' is not assignable to type 'ResultProfilIfcAuto'.
server/api/contrats/services/GetInfosCnt.ts(185,13): error TS2322: Type 'unknown' is not assignable to type 'ResultProfilCpAncAuto'.
server/api/contrats/services/GetInfosCnt.ts(186,13): error TS2322: Type 'unknown' is not assignable to type 'ResultProfilPlanningAuto'.
server/api/contrats/services/GetInfosCnt.ts(187,13): error TS2322: Type 'unknown' is not assignable to type 'ProfilPrésence | null'.
  Type 'unknown' is not assignable to type 'ProfilPrésence'.
server/api/contrats/services/GetInfosCnt.ts(188,13): error TS2322: Type 'undefined' is not assignable to type 'ProfilAffichBul | null'.
server/api/contrats/services/GetInfosCnt.ts(201,5): error TS2322: Type 'InfosCntData | null' is not assignable to type 'InfosCntData'.
  Type 'null' is not assignable to type 'InfosCntData'.
server/api/contrats/services/GetInfosCnt.ts(367,17): error TS2740: Type 'PpaCourante' is missing the following properties from type 'pay_periodepaye_ppa': ppa_libelle, ppa_numero_ordre, ppa_datereglement, lot_id, and 2 more.
server/api/contrats/services/GetInfosCnt.ts(383,31): error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '(Promise<Cprev[]> | Promise<StatutRegimeAmSelected[]> | Promise<ResultProfilRemAuto> | Promise<ResultProfilCpAncAuto> | Promise<TcoSelected[]> | Promise<ResultPrttAuto> | Promise<ResultProfilCpAuto> | Promise<Tat | null> | Promise<ResultProfilSsAuto> | Promise<ResultProfilIfcAuto> | Promise<ResultProfilAffichBulAuto> | Promise<ResultProfilPlanningAuto> | Promise<ResultProfilPrésenceAuto> | Promise<PeriodeDebutContrat>)[]' is not assignable to parameter of type 'Iterable<Cprev[] | PromiseLike<Cprev[] | null> | null>'.
      The types returned by '[Symbol.iterator]().next(...)' are incompatible between these types.
        Type 'IteratorResult<Promise<Cprev[]> | Promise<StatutRegimeAmSelected[]> | Promise<ResultProfilRemAuto> | Promise<ResultProfilCpAncAuto> | Promise<TcoSelected[]> | Promise<ResultPrttAuto> | Promise<ResultProfilCpAuto> | Promise<Tat | null> | Promise<ResultProfilSsAuto> | Promise<ResultProfilIfcAuto> | Promise<ResultProfilAffichBulAuto> | Promise<ResultProfilPlanningAuto> | Promise<ResultProfilPrésenceAuto> | Promise<PeriodeDebutContrat>, any>' is not assignable to type 'IteratorResult<Cprev[] | PromiseLike<Cprev[] | null> | null, any>'.
          Type 'IteratorYieldResult<Promise<Cprev[]> | Promise<StatutRegimeAmSelected[]> | Promise<ResultProfilRemAuto> | Promise<ResultProfilCpAncAuto> | Promise<TcoSelected[]> | Promise<ResultPrttAuto> | Promise<ResultProfilCpAuto> | Promise<Tat | null> | Promise<ResultProfilSsAuto> | Promise<ResultProfilIfcAuto> | Promise<ResultProfilAffichBulAuto> | Promise<ResultProfilPlanningAuto> | Promise<ResultProfilPrésenceAuto> | Promise<PeriodeDebutContrat>>' is not assignable to type 'IteratorResult<Cprev[] | PromiseLike<Cprev[] | null> | null, any>'.
            Type 'IteratorYieldResult<Promise<Cprev[]> | Promise<StatutRegimeAmSelected[]> | Promise<ResultProfilRemAuto> | Promise<ResultProfilCpAncAuto> | Promise<TcoSelected[]> | Promise<ResultPrttAuto> | Promise<ResultProfilCpAuto> | Promise<Tat | null> | Promise<ResultProfilSsAuto> | Promise<ResultProfilIfcAuto> | Promise<ResultProfilAffichBulAuto> | Promise<ResultProfilPlanningAuto> | Promise<ResultProfilPrésenceAuto> | Promise<PeriodeDebutContrat>>' is not assignable to type 'IteratorYieldResult<Cprev[] | PromiseLike<Cprev[] | null> | null>'.
              Type 'Promise<Cprev[]> | Promise<StatutRegimeAmSelected[]> | Promise<ResultProfilRemAuto> | Promise<ResultProfilCpAncAuto> | Promise<TcoSelected[]> | Promise<ResultPrttAuto> | Promise<ResultProfilCpAuto> | Promise<Tat | null> | Promise<ResultProfilSsAuto> | Promise<ResultProfilIfcAuto> | Promise<ResultProfilAffichBulAuto> | Promise<ResultProfilPlanningAuto> | Promise<ResultProfilPrésenceAuto> | Promise<PeriodeDebutContrat>' is not assignable to type 'Cprev[] | PromiseLike<Cprev[] | null> | null'.
                Type 'Promise<StatutRegimeAmSelected[]>' is not assignable to type 'Cprev[] | PromiseLike<Cprev[] | null> | null'.
                  Type 'Promise<StatutRegimeAmSelected[]>' is not assignable to type 'PromiseLike<Cprev[] | null>'.
                    Types of property 'then' are incompatible.
                      Type '<TResult1 = StatutRegimeAmSelected[], TResult2 = never>(onfulfilled?: ((value: StatutRegimeAmSelected[]) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>' is not assignable to type '<TResult1 = Cprev[] | null, TResult2 = never>(onfulfilled?: ((value: Cprev[] | null) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => PromiseLike<TResult1 | TResult2>'.
                        Types of parameters 'onfulfilled' and 'onfulfilled' are incompatible.
                          Types of parameters 'value' and 'value' are incompatible.
                            Type 'StatutRegimeAmSelected[]' is not assignable to type 'Cprev[]'.
                              Type 'StatutRegimeAmSelected' is missing the following properties from type 'Cprev': cnt_id, prev_id, prev_ref, prev_lib, and 38 more.
server/api/contrats/services/GetInfosCnt.ts(433,13): error TS2493: Tuple type '[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]' of length '10' has no element at index '10'.
server/api/contrats/services/GetInfosCnt.ts(434,13): error TS2493: Tuple type '[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]' of length '10' has no element at index '11'.
server/api/contrats/services/GetInfosCnt.ts(435,13): error TS2493: Tuple type '[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]' of length '10' has no element at index '12'.
server/api/contrats/services/GetInfosCnt.ts(436,13): error TS2493: Tuple type '[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]' of length '10' has no element at index '13'.
server/api/contrats/services/GetInfosCnt.ts(437,31): error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '(Promise<Cprev[]> | Promise<StatutRegimeAmSelected[]> | Promise<ResultProfilRemAuto> | Promise<ResultProfilCpAncAuto> | Promise<TcoSelected[]> | Promise<ResultPrttAuto> | Promise<ResultProfilCpAuto> | Promise<Tat | null> | Promise<ResultProfilSsAuto> | Promise<ResultProfilIfcAuto> | Promise<ResultProfilAffichBulAuto> | Promise<ResultProfilPlanningAuto> | Promise<ResultProfilPrésenceAuto> | Promise<PeriodeDebutContrat>)[]' is not assignable to parameter of type 'Iterable<Cprev[] | PromiseLike<Cprev[] | null> | null>'.
server/api/contrats/services/duplicateContrat.ts(94,9): error TS2322: Type 'number | null' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/contrats/services/getCurrentPeriodesEssai.ts(130,52): error TS2345: Argument of type 'TYPE_PERIODE_ESSAI' is not assignable to parameter of type 'string'.
server/api/contrats/services/getLastRemFromCnt.ts(45,57): error TS2345: Argument of type '{ pad_id: number; lastVvaSalaire: pay_valeurvariable_vva; peri_anneemois: number; cnt_soldetc_mdp_id: number; ncnt_id: number; grp_id: pay_contrat_cntFields.grp_id; cnt_preavis_noneffnonpaye: boolean; cnt_preavis_noneffpaye: boolean; cnt_preavis_noneffnonpaye_datedebut: pay_contrat_cntFields.cnt_preavis_noneffnonpaye_datedebut; cnt_preavis_noneffnonpaye_datefin: pay_contrat_cntFields.cnt_preavis_noneffnonpaye_datefin; cnt_preavis_noneffpaye_datedebut: pay_contrat_cntFields.cnt_preavis_noneffpaye_datedebut; cnt_preavis_noneffpaye_datefin: pay_contrat_cntFields.cnt_preavis_noneffpaye_datefin; cnt_id: number; cnt_debut_date: Date; cnt_fin_date: pay_contrat_cntFields.cnt_fin_date; cnt_datefin_prevue: pay_contrat_cntFields.cnt_datefin_prevue; cnt_datefin_essai: pay_contrat_cntFields.cnt_datefin_essai; cnt_preavis_fait: boolean; cnt_date_notification: pay_contrat_cntFields.cnt_date_notification; cnt_preavisfait_date_debut: pay_contrat_cntFields.cnt_preavisfait_date_debut; cnt_preavisfait_date_fin: pay_contrat_cntFields.cnt_preavisfait_date_fin; eta_id: number; sal_id: number; mtf_id: pay_contrat_cntFields.mtf_id; cnt_acompte_mdp_id: number; cnt_salaire_mdp_id: number; lot_id: pay_contrat_cntFields.lot_id; cnt_num: pay_contrat_cntFields.cnt_num; rcdd_id: pay_contrat_cntFields.rcdd_id; prof_id_prem_force: pay_contrat_cntFields.prof_id_prem_force; prof_id_prss_force: pay_contrat_cntFields.prof_id_prss_force; dpub_id: pay_contrat_cntFields.dpub_id; semp_id: number; cnt_quot_trav: pay_contrat_cntFields.cnt_quot_trav; cnt_a_quot_trav_specifique: boolean; cnt_quot_trav_spec_raison: pay_contrat_cntFields.cnt_quot_trav_spec_raison; prof_id_prcp_force: pay_contrat_cntFields.prof_id_prcp_force; pare_id_force: pay_contrat_cntFields.pare_id_force; pacp_id_force: pay_contrat_cntFields.pacp_id_force; pass_id_force: pay_contrat_cntFields.pass_id_force; cnt_simul: boolean; cnt_id_externe: pay_contrat_cntFields.cnt_id_externe; cnt_datefin_duree_minimale: pay_contrat_cntFields.cnt_datefin_duree_minimale; cnt_rempla_sal_libre: pay_contrat_cntFields.cnt_rempla_sal_libre; cnt_rempla_sal_id: pay_contrat_cntFields.cnt_rempla_sal_id; cnt_sans_terme_precis: boolean; euti_id: pay_contrat_cntFields.euti_id; src_id_force: pay_contrat_cntFields.src_id_force; ccn_id_euti_force: pay_contrat_cntFields.ccn_id_euti_force; sat_id_force: pay_contrat_cntFields.sat_id_force; cnt_reprise_date_fin_traitement: pay_contrat_cntFields.cnt_reprise_date_fin_traitement; prtt_id_force: pay_contrat_cntFields.prtt_id_force; spec_id: pay_contrat_cntFields.spec_id; cdpre_id: pay_contrat_cntFields.cdpre_id; cnt_cdpre_date_fin: pay_contrat_cntFields.cnt_cdpre_date_fin; pifc_id_force: pay_contrat_cntFields.pifc_id_force; prbul_id_force: pay_contrat_cntFields.prbul_id_force; ppla_id_force: pay_contrat_cntFields.ppla_id_force; prui_id_force: pay_contrat_cntFields.prui_id_force; prga_id_force: pay_contrat_cntFields.prga_id_force; prgp_id_force: pay_contrat_cntFields.prgp_id_force; cnt_ts_exo: boolean; cnt_heure_embauche: pay_contrat_cntFields.cnt_heure_embauche; cnt_dpae_dateheure_gene: pay_contrat_cntFields.cnt_dpae_dateheure_gene; cnt_rupconv_date_signature: pay_contrat_cntFields.cnt_rupconv_date_signature; cnt_lic_date_eng_procedure: pay_contrat_cntFields.cnt_lic_date_eng_procedure; cnt_aed_statut_particulier: pay_contrat_cntFields.cnt_aed_statut_particulier; cnt_transaction_statut: pay_contrat_cntFields.cnt_transaction_statut; cnt_heure_fin: pay_contrat_cntFields.cnt_heure_fin; cnt_heure_embauche_reelle: pay_contrat_cntFields.cnt_heure_embauche_reelle; mnvi_id: pay_contrat_cntFields.mnvi_id; cnt_prevenance_effpaye: boolean; cnt_prevenance_effpaye_datedebut: pay_contrat_cntFields.cnt_prevenance_effpaye_datedebut; cnt_prevenance_effpaye_datefin: pay_contrat_cntFields.cnt_prevenance_effpaye_datefin; cnt_prevenance_noneffpaye: boolean; cnt_prevenance_noneffpaye_datedebut: pay_contrat_cntFields.cnt_prevenance_noneffpaye_datedebut; cnt_prevenance_noneffpaye_datefin: pay_contrat_cntFields.cnt_prevenance_noneffpaye_datefin; cnt_justif_recours_cdd: pay_contrat_cntFields.cnt_justif_recours_cdd; cnt_debut_periode_souplesse: pay_contrat_cntFields.cnt_debut_periode_souplesse; cnt_fin_periode_souplesse: pay_contrat_cntFields.cnt_fin_periode_souplesse; pcpa_id_force: pay_contrat_cntFields.pcpa_id_force; cnt_date_envoi: pay_contrat_cntFields.cnt_date_envoi; cnt_date_reception: pay_contrat_cntFields.cnt_date_reception; cnt_euti_date_envoi: pay_contrat_cntFields.cnt_euti_date_envoi; cnt_euti_date_reception: pay_contrat_cntFields.cnt_euti_date_reception; sal_id_tuteur: pay_contrat_cntFields.sal_id_tuteur; cnt_der_jour_trav: pay_contrat_cntFields.cnt_der_jour_trav; cnt_datefin_essai_renouv: pay_contrat_cntFields.cnt_datefin_essai_renouv; cnt_infos_comp: pay_contrat_cntFields.cnt_infos_comp; cnt_notes: pay_contrat_cntFields.cnt_notes; trem_id: pay_contrat_cntFields.trem_id; ett_id: pay_contrat_cntFields.ett_id; cnt_est_retraite_reprise_activite: boolean; cnt_date_paiement_stc: pay_contrat_cntFields.cnt_date_paiement_stc; }' is not assignable to parameter of type 'SelectionPeriaDataCnt'.
  Type '{ pad_id: number; lastVvaSalaire: pay_valeurvariable_vva; peri_anneemois: number; cnt_soldetc_mdp_id: number; ncnt_id: number; grp_id: grp_id; cnt_preavis_noneffnonpaye: boolean; cnt_preavis_noneffpaye: boolean; cnt_preavis_noneffnonpaye_datedebut: cnt_preavis_noneffnonpaye_datedebut; cnt_preavis_noneffnonpaye_datefin: cnt_preavis_noneffnonpaye_datefin; cnt_preavis_noneffpaye_datedebut: cnt_preavis_noneffpaye_datedebut; cnt_preavis_noneffpaye_datefin: cnt_preavis_noneffpaye_datefin; cnt_id: number; cnt_debut_date: Date; cnt_fin_date: cnt_fin_date; cnt_datefin_prevue: cnt_datefin_prevue; cnt_datefin_essai: cnt_datefin_essai; cnt_preavis_fait: boolean; cnt_date_notification: cnt_date_notification; cnt_preavisfait_date_debut: cnt_preavisfait_date_debut; cnt_preavisfait_date_fin: cnt_preavisfait_date_fin; eta_id: number; sal_id: number; mtf_id: mtf_id; cnt_acompte_mdp_id: number; cnt_salaire_mdp_id: number; lot_id: lot_id; cnt_num: cnt_num; rcdd_id: rcdd_id; prof_id_prem_force: prof_id_prem_force; prof_id_prss_force: prof_id_prss_force; dpub_id: dpub_id; semp_id: number; cnt_quot_trav: cnt_quot_trav; cnt_a_quot_trav_specifique: boolean; cnt_quot_trav_spec_raison: cnt_quot_trav_spec_raison; prof_id_prcp_force: prof_id_prcp_force; pare_id_force: pare_id_force; pacp_id_force: pacp_id_force; pass_id_force: pass_id_force; cnt_simul: boolean; cnt_id_externe: cnt_id_externe; cnt_datefin_duree_minimale: cnt_datefin_duree_minimale; cnt_rempla_sal_libre: cnt_rempla_sal_libre; cnt_rempla_sal_id: cnt_rempla_sal_id; cnt_sans_terme_precis: boolean; euti_id: euti_id; src_id_force: src_id_force; ccn_id_euti_force: ccn_id_euti_force; sat_id_force: sat_id_force; cnt_reprise_date_fin_traitement: cnt_reprise_date_fin_traitement; prtt_id_force: prtt_id_force; spec_id: spec_id; cdpre_id: cdpre_id; cnt_cdpre_date_fin: cnt_cdpre_date_fin; pifc_id_force: pifc_id_force; prbul_id_force: prbul_id_force; ppla_id_force: ppla_id_force; prui_id_force: prui_id_force; prga_id_force: prga_id_force; prgp_id_force: prgp_id_force; cnt_ts_exo: boolean; cnt_heure_embauche: cnt_heure_embauche; cnt_dpae_dateheure_gene: cnt_dpae_dateheure_gene; cnt_rupconv_date_signature: cnt_rupconv_date_signature; cnt_lic_date_eng_procedure: cnt_lic_date_eng_procedure; cnt_aed_statut_particulier: cnt_aed_statut_particulier; cnt_transaction_statut: cnt_transaction_statut; cnt_heure_fin: cnt_heure_fin; cnt_heure_embauche_reelle: cnt_heure_embauche_reelle; mnvi_id: mnvi_id; cnt_prevenance_effpaye: boolean; cnt_prevenance_effpaye_datedebut: cnt_prevenance_effpaye_datedebut; cnt_prevenance_effpaye_datefin: cnt_prevenance_effpaye_datefin; cnt_prevenance_noneffpaye: boolean; cnt_prevenance_noneffpaye_datedebut: cnt_prevenance_noneffpaye_datedebut; cnt_prevenance_noneffpaye_datefin: cnt_prevenance_noneffpaye_datefin; cnt_justif_recours_cdd: cnt_justif_recours_cdd; cnt_debut_periode_souplesse: cnt_debut_periode_souplesse; cnt_fin_periode_souplesse: cnt_fin_periode_souplesse; pcpa_id_force: pcpa_id_force; cnt_date_envoi: cnt_date_envoi; cnt_date_reception: cnt_date_reception; cnt_euti_date_envoi: cnt_euti_date_envoi; cnt_euti_date_reception: cnt_euti_date_reception; sal_id_tuteur: sal_id_tuteur; cnt_der_jour_trav: cnt_der_jour_trav; cnt_datefin_essai_renouv: cnt_datefin_essai_renouv; cnt_infos_comp: cnt_infos_comp; cnt_notes: cnt_notes; trem_id: trem_id; ett_id: ett_id; cnt_est_retraite_reprise_activite: boolean; cnt_date_paiement_stc: cnt_date_paiement_stc; }' is missing the following properties from type 'SelectionPeriaDataCnt': catc_id, src_id
server/api/contrats/services/insertNewContrat.ts(13,56): error TS2345: Argument of type 'pay_contrat_cnt' is not assignable to parameter of type 'DataForInsert<{ cnt_soldetc_mdp_id: number; ncnt_id: number; grp_id: number | null; cnt_preavis_noneffnonpaye: boolean; cnt_preavis_noneffpaye: boolean; cnt_preavis_noneffnonpaye_datedebut: Date | null; cnt_preavis_noneffnonpaye_datefin: Date | null; cnt_preavis_noneffpaye_datedebut: Date | null; cnt_preavis_noneffpaye_datefin: Date | null; cnt_id: number; cnt_debut_date: Date; cnt_fin_date: Date | null; cnt_datefin_prevue: Date | null; cnt_datefin_essai: Date | null; cnt_preavis_fait: boolean; cnt_date_notification: Date | null; cnt_preavisfait_date_debut: Date | null; cnt_preavisfait_date_fin: Date | null; eta_id: number; sal_id: number; mtf_id: number | null; cnt_acompte_mdp_id: number; cnt_salaire_mdp_id: number; lot_id: number | null; cnt_num: null; rcdd_id: number | null; prof_id_prem_force: number | null; prof_id_prss_force: number | null; dpub_id: number | null; semp_id: number; cnt_quot_trav: number | null; cnt_a_quot_trav_specifique: boolean; cnt_quot_trav_spec_raison: number | null; prof_id_prcp_force: number | null; pare_id_force: number | null; pacp_id_force: number | null; pass_id_force: number | null; cnt_simul: boolean; cnt_id_externe: null; cnt_datefin_duree_minimale: Date | null; cnt_rempla_sal_libre: null; cnt_rempla_sal_id: number | null; cnt_sans_terme_precis: boolean; euti_id: number | null; src_id_force: number | null; ccn_id_euti_force: number | null; sat_id_force: number | null; cnt_reprise_date_fin_traitement: Date | null; prtt_id_force: number | null; spec_id: number | null; cdpre_id: number | null; cnt_cdpre_date_fin: Date | null; pifc_id_force: number | null; prbul_id_force: number | null; ppla_id_force: number | null; prui_id_force: number | null; prga_id_force: number | null; prgp_id_force: number | null; cnt_ts_exo: boolean; cnt_heure_embauche: null; cnt_dpae_dateheure_gene: Date | null; cnt_rupconv_date_signature: Date | null; cnt_lic_date_eng_procedure: Date | null; cnt_aed_statut_particulier: number | null; cnt_transaction_statut: number | null; cnt_heure_fin: null; cnt_heure_embauche_reelle: Date | null; mnvi_id: number | null; cnt_prevenance_effpaye: boolean; cnt_prevenance_effpaye_datedebut: Date | null; cnt_prevenance_effpaye_datefin: Date | null; cnt_prevenance_noneffpaye: boolean; cnt_prevenance_noneffpaye_datedebut: Date | null; cnt_prevenance_noneffpaye_datefin: Date | null; cnt_justif_recours_cdd: null; cnt_debut_periode_souplesse: Date | null; cnt_fin_periode_souplesse: Date | null; pcpa_id_force: number | null; cnt_date_envoi: Date | null; cnt_date_reception: Date | null; cnt_euti_date_envoi: Date | null; cnt_euti_date_reception: Date | null; sal_id_tuteur: number | null; cnt_der_jour_trav: Date | null; cnt_datefin_essai_renouv: Date | null; cnt_infos_comp: null; cnt_notes: null; trem_id: number | null; ett_id: number | null; cnt_est_retraite_reprise_activite: boolean; cnt_date_paiement_stc: Date | null; }>'.
  Types of property 'cnt_num' are incompatible.
    Type 'cnt_num' is not assignable to type 'null | undefined'.
      Type 'string' is not assignable to type 'null | undefined'.
server/api/contrats/services/insertNewContrat.ts(35,40): error TS2345: Argument of type '{ cnt_id: number; ect_id: number; emp_id: number; ect_datedebut: Date; ect_datefin: Schema.pay_emploicontrat_ectFields.ect_datefin; ect_peridebut: number; ect_perifin: Schema.pay_emploicontrat_ectFields.ect_perifin; ect_lib: string; posc_id: Schema.pay_emploicontrat_ectFields.posc_id; nivc_id: Schema.pay_emploicontrat_ectFields.nivc_id; ech_id: Schema.pay_emploicontrat_ectFields.ech_id; acrd_id: Schema.pay_emploicontrat_ectFields.acrd_id; ect_classif_ech: Schema.pay_emploicontrat_ectFields.ect_classif_ech; ect_classif_pos: Schema.pay_emploicontrat_ectFields.ect_classif_pos; ect_classif_niv: Schema.pay_emploicontrat_ectFields.ect_classif_niv; ect_classif_fil: Schema.pay_emploicontrat_ectFields.ect_classif_fil; ect_classif_cat: Schema.pay_emploicontrat_ectFields.ect_classif_cat; ect_classif_coef: Schema.pay_emploicontrat_ectFields.ect_classif_coef; ect_smc_coef: Schema.pay_emploicontrat_ectFields.ect_smc_coef; }' is not assignable to parameter of type 'DataForInsert<{ cnt_id: number; ect_id: number; emp_id: number; ect_datedebut: Date; ect_datefin: Date | null; ect_peridebut: number; ect_perifin: number | null; ect_lib: string; posc_id: number | null; nivc_id: number | null; ech_id: number | null; acrd_id: number | null; ect_classif_ech: null; ect_classif_pos: null; ect_classif_niv: null; ect_classif_fil: null; ect_classif_cat: null; ect_classif_coef: null; ect_smc_coef: number | null; }>'.
  Types of property 'ect_classif_ech' are incompatible.
    Type 'ect_classif_ech' is not assignable to type 'null | undefined'.
      Type 'string' is not assignable to type 'null | undefined'.
server/api/contrats/services/insertNewContrat.ts(48,44): error TS2345: Argument of type '{ cnt_id: number; vva_id: number; vva_niveau: number; vva_valeur: string; vva_datedebut: Date; vva_datefin: Schema.pay_valeurvariable_vvaFields.vva_datefin; vva_periodedebut: Schema.pay_valeurvariable_vvaFields.vva_periodedebut; vva_periodefin: Schema.pay_valeurvariable_vvaFields.vva_periodefin; vva_comm: Schema.pay_valeurvariable_vvaFields.vva_comm; var_id: number; vva_id_externe: Schema.pay_valeurvariable_vvaFields.vva_id_externe; lvva_id: Schema.pay_valeurvariable_vvaFields.lvva_id; acrd_id: Schema.pay_valeurvariable_vvaFields.acrd_id; tacc_id: Schema.pay_valeurvariable_vvaFields.tacc_id; vva_type_peri: number; peria_id: Schema.pay_valeurvariable_vvaFields.peria_id; sal_id: Schema.pay_valeurvariable_vvaFields.sal_id; euti_id: Schema.pay_valeurvariable_vvaFields.euti_id; emp_id: Schema.pay_valeurvariable_vvaFields.emp_id; vva_regul_peridebut: Schema.pay_valeurvariable_vvaFields.vva_regul_peridebut; vva_regul_perifin: Schema.pay_valeurvariable_vvaFields.vva_regul_perifin; }' is not assignable to parameter of type 'DataForInsert<{ cnt_id: number; vva_id: number; vva_niveau: number; vva_valeur: string; vva_datedebut: Date; vva_datefin: Date | null; vva_periodedebut: number | null; vva_periodefin: number | null; vva_comm: null; var_id: number; vva_id_externe: null; lvva_id: number | null; acrd_id: number | null; tacc_id: number | null; vva_type_peri: number; peria_id: number | null; sal_id: number | null; euti_id: number | null; emp_id: number | null; vva_regul_peridebut: number | null; vva_regul_perifin: number | null; }>'.
  Types of property 'vva_comm' are incompatible.
    Type 'vva_comm' is not assignable to type 'null | undefined'.
      Type 'string' is not assignable to type 'null | undefined'.
server/api/crm/zendesk/services/getInfosZdUser.ts(56,27): error TS2571: Object is of type 'unknown'.
server/api/crm/zendesk/services/setZdOrgExternalId.ts(22,12): error TS2571: Object is of type 'unknown'.
server/api/dads/router.ts(66,31): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/dads/router.ts(66,70): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/dads/router.ts(69,30): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to parameter of type 'number'.
server/api/dads/router.ts(71,35): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/dads/router.ts(71,74): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/dads/router.ts(73,35): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/dads/router.ts(73,74): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/documents/router.ts(52,26): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'DocInfos'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'DocInfos': doc_title, doc_comment, doc_id, doc_type, and 3 more.
server/api/documents/router.ts(52,36): error TS2532: Object is possibly 'undefined'.
server/api/documents/router.ts(87,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/documents/router.ts(101,69): error TS2345: Argument of type 'File | undefined' is not assignable to parameter of type 'File'.
  Type 'undefined' is not assignable to type 'File'.
server/api/dossiers/services/createNouveauDossier.ts(69,48): error TS2345: Argument of type '{ raisonSociale: string; libelleDossier: string; pdosId: number; client: DbClient; siren: string; frjId: number; }' is not assignable to parameter of type 'Input'.
  Property 'utiId' is missing in type '{ raisonSociale: string; libelleDossier: string; pdosId: number; client: DbClient; siren: string; frjId: number; }' but required in type 'Input'.
server/api/dossiers/services/createNouveauDossier.ts(99,49): error TS2345: Argument of type '{ padId: number; client: DbClient; bilanWriter: BilanWriter; }' is not assignable to parameter of type 'Cfg'.
  Property 'utiId' is missing in type '{ padId: number; client: DbClient; bilanWriter: BilanWriter; }' but required in type 'Cfg'.
server/api/dossiers/services/createNouveauDossier.ts(122,52): error TS2345: Argument of type '{ lotId: number; periCourante: number; client: DbClient; bilanWriter: BilanWriter; }' is not assignable to parameter of type 'Cfg'.
  Property 'utiId' is missing in type '{ lotId: number; periCourante: number; client: DbClient; bilanWriter: BilanWriter; }' but required in type 'Cfg'.
server/api/dossiers/services/createNouveauDossier.ts(165,70): error TS2454: Variable 'padCreated' is used before being assigned.
server/api/dossiers/services/createNouveauDossier.ts(175,22): error TS2454: Variable 'padCreated' is used before being assigned.
server/api/dpae/router.ts(24,102): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to parameter of type 'Resolvable<Iterable<Resolvable<{ contratId: number; contratType: "CNT" | "ECNT"; }>>>'.
  Type 'undefined' is not assignable to type 'Resolvable<Iterable<Resolvable<{ contratId: number; contratType: "CNT" | "ECNT"; }>>>'.
server/api/dpae/router.ts(43,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/dpae/router.ts(45,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/dpae/router.ts(49,9): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/dsn/m2m/services/crmFormatters/crm94/formatNature94.ts(33,15): error TS2454: Variable 'hasTaux' is used before being assigned.
server/api/dsn/m2m/services/getDescriptionRetour.ts(102,38): error TS2345: Argument of type 'DataRdsn<XmlRdsnV02R01ExplicitArray | RapportGipMdsV01R08>' is not assignable to parameter of type 'DataRdsn<RapportGipMdsV01R08>'.
  Type 'XmlRdsnV02R01ExplicitArray | RapportGipMdsV01R08' is not assignable to type 'RapportGipMdsV01R08'.
    Property '"gipmds:rapport"' is missing in type 'XmlRdsnV02R01ExplicitArray' but required in type 'RapportGipMdsV01R08'.
server/api/dsn/router.ts(101,4): error TS2740: Type '{ [key: string]: any; }' is missing the following properties from type 'CriteriaReceived': pad_id, peri, modeEnvoi, type, and 4 more.
server/api/dsn/services/data/getCotisPrevsForAllCnt.ts(21,11): error TS2322: Type 'CprevFromBulletin[]' is not assignable to type 'CotisPrevSelected[]'.
  Property 'src_id' is missing in type 'CprevFromBulletin' but required in type 'CotisPrevSelected'.
server/api/dsn/services/data/getPeriasForAllCnts.ts(17,33): error TS2339: Property 'posconv' does not exist on type 'CntSelected'.
server/api/dsn/services/data/getPeriasForAllCnts.ts(19,34): error TS2339: Property 'posconv' does not exist on type 'CntSelected'.
server/api/dsn/services/data/getPeriasForAllCnts.ts(24,17): error TS2322: Type 'import("/home/runner/work/payroll-app/payroll-app/server/payrollEngine/selectPERIA").Ccn' is not assignable to type 'import("/home/runner/work/payroll-app/payroll-app/server/payrollEngine/declaCalc").Ccn'.
  Types of property 'ccn_lib_long' are incompatible.
    Type 'ccn_lib_long' is not assignable to type 'string'.
      Type 'null' is not assignable to type 'string'.
server/api/dsn/services/data/getPosConvForAllCnts.ts(14,22): error TS2339: Property 'posconv' does not exist on type 'CntSelected'.
server/api/dsn/services/data/getPosConvForAllCnts.ts(18,25): error TS2339: Property 'posconv' does not exist on type 'CntSelected'.
server/api/dsn/services/data/selectAllSals.ts(93,21): error TS2339: Property 'mergeWithCntId' does not exist on type 'CntSelected'.
server/api/dsn/services/payments/computeDatePayment.spec.ts(14,19): error TS2740: Type '{ tor_id: number; afod_periodicite_paiement: ORGANISME_PERIODICITE; moisPaieDebut: number; moisPaieFin: number; dateDebut: Moment; dateFin: Moment; }' is missing the following properties from type 'AffilByPeriode': mdp_id, bnqd_id, afod_id, afod_numaffil, and 5 more.
server/api/dsn/services/payments/generatePaymentsOps.ts(238,9): error TS2322: Type 'mdp_id' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/dsn/services/persist.ts(61,3): error TS2322: Type 'CriteriaReceived | undefined' is not assignable to type 'Criteria | undefined'.
  Type 'CriteriaReceived' is missing the following properties from type 'Criteria': isMensuelle, isEvenementielle, isTypeFamilleAnnul, isDecalage, and 6 more.
server/api/dsn/services/s30/generateOneIndiv.ts(241,31): error TS2769: No overload matches this call.
  Overload 1 of 3, '(tasks: AsyncFunction<Results, Error>[], callback?: AsyncResultArrayCallback<Results, Error> | undefined): void', gave the following error.
    Argument of type '{ individu: (done: (err?: Error | null | undefined, s30?: Block | undefined) => void) => void; chgtsIndividu: (done: any) => void; expositionsPenibilite: (done: any) => void; contrats: (done: AsyncCallback) => void; affilsPrev: (done: any) => void; versements: (done: AsyncCallback) => void; remunerations: (done: any) => void; primes: (done: any) => void; autresElements: (done: any) => void; basesAssujetties: (done: any) => void; basesAssujettiesPrev: (done: any) => void; regulsCotisIndiv: (done: AsyncCallback) => void; anciennete: (done: any) => void; }' is not assignable to parameter of type 'AsyncFunction<Results, Error>[]'.
      Type '{ individu: (done: (err?: Error | null | undefined, s30?: Block | undefined) => void) => void; chgtsIndividu: (done: any) => void; expositionsPenibilite: (done: any) => void; contrats: (done: AsyncCallback) => void; affilsPrev: (done: any) => void; versements: (done: AsyncCallback) => void; remunerations: (done: any) => void; primes: (done: any) => void; autresElements: (done: any) => void; basesAssujetties: (done: any) => void; basesAssujettiesPrev: (done: any) => void; regulsCotisIndiv: (done: AsyncCallback) => void; anciennete: (done: any) => void; }' is missing the following properties from type 'AsyncFunction<Results, Error>[]': length, pop, push, concat, and 28 more.
  Overload 2 of 3, '(tasks: Dictionary<AsyncFunction<Results, Error>>, callback?: AsyncResultObjectCallback<Results, Error> | undefined): void', gave the following error.
    Argument of type '{ individu: (done: (err?: Error | null | undefined, s30?: Block | undefined) => void) => void; chgtsIndividu: (done: any) => void; expositionsPenibilite: (done: any) => void; contrats: (done: AsyncCallback) => void; affilsPrev: (done: any) => void; versements: (done: AsyncCallback) => void; remunerations: (done: any) => void; primes: (done: any) => void; autresElements: (done: any) => void; basesAssujetties: (done: any) => void; basesAssujettiesPrev: (done: any) => void; regulsCotisIndiv: (done: AsyncCallback) => void; anciennete: (done: any) => void; }' is not assignable to parameter of type 'Dictionary<AsyncFunction<Results, Error>>'.
      Property 'individu' is incompatible with index signature.
        Type '(done: (err?: Error | null | undefined, s30?: DSN.Block | undefined) => void) => void' is not assignable to type 'AsyncFunction<Results, Error>'.
          Types of parameters 'done' and 'callback' are incompatible.
            Types of parameters 'result' and 's30' are incompatible.
              Type 'Block | undefined' is not assignable to type 'Results | undefined'.
                Type 'Block' is missing the following properties from type 'Results': individu, penibilite, chgtsIndividu, expositionsPenibilite, and 10 more.
server/api/dsn/services/s30/s40/allContrats.ts(8,1): error TS6133: 'async' is declared but its value is never read.
server/api/dsn/services/s30/s40/s51/s21_g00_51.ts(118,60): error TS2345: Argument of type 'trem_id' is not assignable to parameter of type 'TREM_ID'.
  Type 'null' is not assignable to type 'TREM_ID'.
server/api/dsn/services/s30/s40/s51/s21_g00_51.ts(120,3): error TS2322: Type 'number | null' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/dsn/services/s30/s40/s51/s21_g00_51.ts(121,3): error TS2322: Type 'number | null' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/dsn/services/s30/s40/s62/checkMotifFinWithNatureCnt.ts(1,1): error TS6133: 'explainInfo' is declared but its value is never read.
server/api/dsn/services/s30/s40/s71/allS71.ts(15,24): error TS6133: 'criteria' is declared but its value is never read.
server/api/dsn/services/s30/s40/s71/allS71.ts(15,48): error TS6133: 'client' is declared but its value is never read.
server/api/dsn/services/s30/s40/s71/s21_g00_71.spec.ts(13,19): error TS6133: 'criteria' is declared but its value is never read.
server/api/dsn/services/s30/s40/s71/s21_g00_71.spec.ts(40,19): error TS6133: 'criteria' is declared but its value is never read.
server/api/dsn/services/s30/s40/s71/s21_g00_71.spec.ts(58,49): error TS2345: Argument of type 'Cnt' is not assignable to parameter of type 'CntSelected'.
server/api/dsn/services/s30/s40/s71/s21_g00_71.spec.ts(67,19): error TS6133: 'criteria' is declared but its value is never read.
server/api/dsn/services/s30/s40/s71/s21_g00_71.spec.ts(85,49): error TS2345: Argument of type 'Cnt' is not assignable to parameter of type 'CntSelected'.
server/api/dsn/services/s30/s40/s78/s21_g00_79.ts(97,2): error TS2322: Type '(Block | null)[]' is not assignable to type 'Block[]'.
  Type 'Block | null' is not assignable to type 'Block'.
    Type 'null' is not assignable to type 'Block'.
server/api/dsn/services/s30/s50/s21_g00_50.ts(125,2): error TS2322: Type '{ sal_id?: number | undefined; sal_desc?: string | undefined; pas_base?: number | undefined; pas_mnt?: number | undefined; pas_taux?: string | undefined; pas_taux_numerique?: number | undefined; type_taux?: string | undefined; type_taux_numerique?: number | undefined; net_imp?: number | undefined; mnt_exo_hs_mues?: number | undefined; pas_elts_add?: number | undefined; pas_abt_cdd?: number | undefined; pas_base_exo_appr?: number | undefined; pas_ijss?: number | undefined; taux_individu?: string | undefined; taux_individu_numerique?: number | undefined; nap_avant_ir?: number | undefined; nap?: number | undefined; net?: number | undefined; vva_all?: pay_valeurvariable_vva[] | undefined; lvva_all?: pay_lotvva_lvva[] | undefined; ipas_all?: pay_importfichierpas_ipas[] | undefined; is_first_bul?: boolean | undefined; dateReglement: moment.Moment; }' is not assignable to type 'Data'.
  Types of property 'sal_id' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
server/api/dsn/services/sanitizeLocalite.ts(14,5): error TS2322: Type 'string | null' is not assignable to type 'string'.
  Type 'null' is not assignable to type 'string'.
server/api/dsn/services/utils/isVersionNormeSameOrAfter.spec.ts(19,46): error TS2345: Argument of type '"P21V02"' is not assignable to parameter of type 'VersionNormeDsn'.
server/api/dsn/services/utils/isVersionNormeSameOrAfter.spec.ts(22,56): error TS2345: Argument of type '"P21V02"' is not assignable to parameter of type 'VersionNormeDsn'.
server/api/dsn/services/validateCriteria.ts(3,31): error TS2307: Cannot find module '../decla_main' or its corresponding type declarations.
server/api/dsn/services/validation/getReferentialToCheckByRubCode.spec.ts(8,73): error TS2551: Property 'P20V01' does not exist on type 'typeof DSN_VERSION_NORME'. Did you mean 'P21V01'?
server/api/dsn/services/validation/getReferentialToCheckByRubCode.ts(21,27): error TS2551: Property 'P20V01' does not exist on type 'typeof DSN_VERSION_NORME'. Did you mean 'P21V01'?
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeEcnt/basculeEcnt.ts(158,73): error TS2345: Argument of type '{ sal_id: number; cnt_num: number | emp_embauchecontrat_ecntFields.ecnt_num; cnt_soldetc_mdp_id: number; ncnt_id: number; cnt_debut_date: Date; cnt_fin_date: emp_embauchecontrat_ecntFields.ecnt_fin_date; cnt_datefin_prevue: emp_embauchecontrat_ecntFields.ecnt_datefin_prevue; cnt_datefin_essai: emp_embauchecontrat_ecntFields.ecnt_datefin_essai; eta_id: number; cnt_acompte_mdp_id: number; cnt_salaire_mdp_id: number; lot_id: number; rcdd_id: number | undefined; mtf_id: number | null; dpub_id: emp_embauchecontrat_ecntFields.dpub_id; cnt_quot_trav: emp_embauchecontrat_ecntFields.ecnt_quot_trav; cnt_a_quot_trav_specifique: boolean; cnt_quot_trav_spec_raison: emp_embauchecontrat_ecntFields.ecnt_quot_trav_spec_raison; cnt_datefin_duree_minimale: emp_embauchecontrat_ecntFields.ecnt_datefin_duree_minimale; cnt_rempla_sal_libre: emp_embauchecontrat_ecntFields.ecnt_rempla_sal_libre; cnt_rempla_sal_id: emp_embauchecontrat_ecntFields.ecnt_rempla_sal_id; cnt_sans_terme_precis: boolean; euti_id: emp_embauchecontrat_ecntFields.euti_id; src_id_force: emp_embauchecontrat_ecntFields.src_id_force; cdpre_id: emp_embauchecontrat_ecntFields.ecnt_prev_dispense_motif_id; cnt_cdpre_date_fin: emp_embauchecontrat_ecntFields.ecnt_prev_dispense_date_fin; cnt_heure_embauche: emp_embauchecontrat_ecntFields.ecnt_heure_embauche; cnt_dpae_dateheure_gene: emp_embauchecontrat_ecntFields.ecnt_dpae_dateheure_gene; cnt_heure_fin: emp_embauchecontrat_ecntFields.ecnt_heure_fin; cnt_heure_embauche_reelle: emp_embauchecontrat_ecntFields.ecnt_heure_embauche_reelle; cnt_justif_recours_cdd: emp_embauchecontrat_ecntFields.ecnt_justif_recours_cdd; cnt_debut_periode_souplesse: emp_embauchecontrat_ecntFields.ecnt_debut_periode_souplesse; cnt_fin_periode_souplesse: emp_embauchecontrat_ecntFields.ecnt_fin_periode_souplesse; cnt_date_envoi: emp_embauchecontrat_ecntFields.ecnt_date_envoi; cnt_date_reception: emp_embauchecontrat_ecntFields.ecnt_date_reception; sal_id_tuteur: emp_embauchecontrat_ecntFields.sal_id_tuteur; cnt_datefin_essai_renouv: emp_embauchecontrat_ecntFields.ecnt_datefin_essai_renouv; cnt_notes: string | null; trem_id: emp_embauchecontrat_ecntFields.trem_id; cnt_est_retraite_reprise_activite: boolean; pare_id_force: emp_embauchecontrat_ecntFields.pare_id_force; pacp_id_force: emp_embauchecontrat_ecntFields.pacp_id_force; pcpa_id_force: emp_embauchecontrat_ecntFields.pcpa_id_force; prtt_id_force: emp_embauchecontrat_ecntFields.prtt_id_force; ppla_id_force: emp_embauchecontrat_ecntFields.ppla_id_force; }' is not assignable to parameter of type 'DataForInsert<pay_contrat_cnt>'.
  Types of property 'cnt_num' are incompatible.
    Type 'number | ecnt_num' is not assignable to type 'cnt_num | undefined'.
      Type 'number' is not assignable to type 'cnt_num | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeEcnt/basculeEcnt.ts(394,90): error TS2345: Argument of type '{ cnt_id: number; vva_niveau: number; vva_valeur: number; vva_datedebut: Date; var_id: number; vva_periodedebut: number; }' is not assignable to parameter of type 'DataForInsert<pay_valeurvariable_vva>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'number' is not assignable to type 'string | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeEcnt/basculeEcnt.ts(431,91): error TS2345: Argument of type '{ cnt_id: number; vva_niveau: number; vva_valeur: number; vva_datedebut: Date; var_id: number; vva_periodedebut: number; }' is not assignable to parameter of type 'DataForInsert<pay_valeurvariable_vva>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'number' is not assignable to type 'string | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeEcnt/basculeEcnt.ts(549,13): error TS2345: Argument of type '{ cnt_id: number; tcc_datedebut: Date; tcc_peridebut: string; tco_id: number; }' is not assignable to parameter of type 'DataForInsert<pay_typecotisantcontrat_tcc>'.
  Types of property 'tcc_peridebut' are incompatible.
    Type 'string' is not assignable to type 'number | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeEcnt/basculeEcnt.ts(574,17): error TS2345: Argument of type '{ cnt_id: number; tcc_datedebut: Date; tcc_peridebut: string; tco_id: number; }' is not assignable to parameter of type 'DataForInsert<pay_typecotisantcontrat_tcc>'.
  Types of property 'tcc_peridebut' are incompatible.
    Type 'string' is not assignable to type 'number | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeEsal.ts(134,77): error TS2345: Argument of type '{ sal_id: number; tytr_id: emp_embauchesalarie_esalFields.esal_tytr_id; ttra_num: emp_embauchesalarie_esalFields.esal_ttra_num; ttra_lieu_delivr: emp_embauchesalarie_esalFields.esal_ttra_lieu_delivr; ttra_date_emission: emp_embauchesalarie_esalFields.esal_ttra_date_emission; ttra_date_fin_validite: emp_embauchesalarie_esalFields.esal_ttra_date_fin_validite; ttra_nom_administration: emp_embauchesalarie_esalFields.esal_ttra_nom_administration; ttra_renouv: emp_embauchesalarie_esalFields.esal_ttra_renouv; }' is not assignable to parameter of type 'DataForInsert<pay_titretrav_ttra>'.
  Types of property 'tytr_id' are incompatible.
    Type 'esal_tytr_id' is not assignable to type 'number | undefined'.
      Type 'null' is not assignable to type 'number | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeMrem/updateModaliteRemFromMrem.ts(82,86): error TS2345: Argument of type '{ vva_id: number; vva_valeur: number; }' is not assignable to parameter of type 'DataForUpdate<pay_valeurvariable_vva>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'number' is not assignable to type 'string | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeMrem/updateModaliteRemFromMrem.ts(122,90): error TS2345: Argument of type '{ cnt_id: number; vva_niveau: number; vva_valeur: number; vva_datedebut: emp_modifrem_mremFields.mrem_date_debut; vva_periodedebut: number; var_id: number; }' is not assignable to parameter of type 'DataForInsert<pay_valeurvariable_vva>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'number' is not assignable to type 'string | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeMrem/updateModaliteRemFromMrem.ts(163,93): error TS2345: Argument of type '{ vva_id: number; vva_valeur: number; }' is not assignable to parameter of type 'DataForUpdate<pay_valeurvariable_vva>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'number' is not assignable to type 'string | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeMrem/updateModaliteRemFromMrem.ts(179,94): error TS2345: Argument of type '{ cnt_id: number; vva_niveau: number; vva_valeur: number; vva_datedebut: emp_modifrem_mremFields.mrem_date_debut; var_id: number; vva_periodedebut: number; }' is not assignable to parameter of type 'DataForInsert<pay_valeurvariable_vva>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'number' is not assignable to type 'string | undefined'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeMrem/updateModaliteRemFromMrem.ts(229,90): error TS2345: Argument of type '{ cnt_id: number; vva_niveau: number; vva_valeur: number; vva_datedebut: emp_modifrem_mremFields.mrem_date_debut; var_id: number; vva_periodedebut: number; }' is not assignable to parameter of type 'DataForInsert<pay_valeurvariable_vva>'.
server/api/employeur/services/basculeSaisiesEnPaie/basculeurs/basculeMrem/updatePositionnementFromMrem.ts(87,64): error TS2345: Argument of type '{ ect_datedebut: emp_modifrem_mremFields.mrem_date_debut; ect_datefin: null; ect_peridebut: number; ect_perifin: null; ect_id?: number | undefined; emp_id?: number | undefined; cnt_id?: number | undefined; ect_lib?: string | undefined; posc_id?: pay_emploicontrat_ectFields.posc_id | undefined; nivc_id?: pay_emploicontrat_ectFields.nivc_id | undefined; ech_id?: pay_emploicontrat_ectFields.ech_id | undefined; acrd_id?: pay_emploicontrat_ectFields.acrd_id | undefined; ect_classif_ech?: pay_emploicontrat_ectFields.ect_classif_ech | undefined; ect_classif_pos?: pay_emploicontrat_ectFields.ect_classif_pos | undefined; ect_classif_niv?: pay_emploicontrat_ectFields.ect_classif_niv | undefined; ect_classif_fil?: pay_emploicontrat_ectFields.ect_classif_fil | undefined; ect_classif_cat?: pay_emploicontrat_ectFields.ect_classif_cat | undefined; ect_classif_coef?: pay_emploicontrat_ectFields.ect_classif_coef | undefined; ect_smc_coef?: pay_emploicontrat_ectFields.ect_smc_coef | undefined; }' is not assignable to parameter of type 'DataForInsert<{ ect_datedebut: Date | null; ect_datefin: null; ect_peridebut: number; ect_perifin: null; ect_id?: number | undefined; emp_id?: number | undefined; cnt_id?: number | undefined; ect_lib?: undefined; posc_id?: number | null | undefined; nivc_id?: number | null | undefined; ech_id?: number | null | undefined; acrd_id?: number | null | undefined; ect_classif_ech?: null | undefined; ect_classif_pos?: null | undefined; ect_classif_niv?: null | undefined; ect_classif_fil?: null | undefined; ect_classif_cat?: null | undefined; ect_classif_coef?: null | undefined; ect_smc_coef?: number | null | undefined; }>'.
  Types of property 'ect_lib' are incompatible.
    Type 'string | undefined' is not assignable to type 'undefined'.
      Type 'string' is not assignable to type 'undefined'.
server/api/gta/presences/services/presenceChecksByRange.ts(46,79): error TS2304: Cannot find name 'Approval'.
server/api/ijss/services/calculateIjss.spec.ts(31,48): error TS2741: Property 'dataFound' is missing in type '{ periode: number; brutSs: number; brutRetabli: number; heuresCompletes: null; heuresReelles: null; }' but required in type 'SalairePeriode'.
server/api/ijss/services/calculateIjss.spec.ts(37,16): error TS2741: Property 'dataFound' is missing in type '{ periode: number; brutSs: number; brutRetabli: number; heuresCompletes: null; heuresReelles: null; }' but required in type 'SalairePeriode'.
server/api/ijss/services/calculateIjss.spec.ts(43,16): error TS2741: Property 'dataFound' is missing in type '{ periode: number; brutSs: number; brutRetabli: number; heuresCompletes: null; heuresReelles: null; }' but required in type 'SalairePeriode'.
server/api/ijss/services/calculateIjssJour.spec.ts(3,10): error TS2305: Module '"./calculateIjss"' has no exported member 'SalairePeriodeWithSalRef'.
server/api/ijss/services/calculateIjssJour.spec.ts(33,49): error TS2554: Expected 1 arguments, but got 2.
server/api/ijss/services/calculateSalaireRef.ts(41,48): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/ijss/services/calculateSalaireRef.ts(50,48): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/ijss/services/calculateSalaireRef.ts(61,5): error TS2322: Type '{ salaireRef: number | null; explain?: string | undefined; dataFound: boolean; isRepriseCumul?: boolean | undefined; periode: number; brutSs: number | null; brutRetabli: number | null; heuresReelles: number | null; heuresCompletes: number | null; }[]' is not assignable to type 'SalairePeriodeWithSalRef[]'.
  Type '{ salaireRef: number | null; explain?: string | undefined; dataFound: boolean; isRepriseCumul?: boolean | undefined; periode: number; brutSs: number | null; brutRetabli: number | null; heuresReelles: number | null; heuresCompletes: number | null; }' is not assignable to type 'SalairePeriodeWithSalRef'.
    Types of property 'salaireRef' are incompatible.
      Type 'number | null' is not assignable to type 'number'.
        Type 'null' is not assignable to type 'number'.
server/api/ijss/services/computeDerJourTravArret.ts(60,50): error TS2339: Property '_martId' does not exist on type 'CfgGetDjtReel'.
server/api/ijss/services/computeDerJourTravArret.ts(60,50): error TS6133: '_martId' is declared but its value is never read.
server/api/ijss/services/generateTijFromDij.spec.ts(3,1): error TS6133: 'Sinon' is declared but its value is never read.
server/api/ijss/services/generateTijFromDij.spec.ts(12,43): error TS2739: Type '{ dij_total_brut: number; dij_total_net: number; dij_datedebut: Date; dij_datefin: Date; }' is missing the following properties from type 'DijForTotals': dij_nbij, dij_nature_assurance
server/api/ijss/services/generateTijFromDij.spec.ts(17,16): error TS2739: Type '{ dij_total_brut: number; dij_total_net: number; dij_datedebut: Date; dij_datefin: Date; }' is missing the following properties from type 'DijForTotals': dij_nbij, dij_nature_assurance
server/api/ijss/services/generateTijFromDij.spec.ts(23,27): error TS2554: Expected 2 arguments, but got 1.
server/api/ijss/services/generateTijFromDij.ts(59,22): error TS2345: Argument of type 'any' is not assignable to parameter of type 'never'.
server/api/ijss/services/generateTijFromDij.ts(59,25): error TS2488: Type 'any[] | undefined' must have a '[Symbol.iterator]()' method that returns an iterator.
server/api/ijss/services/generateTijFromDij.ts(350,5): error TS2740: Type 'pay_traitementijss_tij[]' is missing the following properties from type 'pay_traitementijss_tij': tij_id, tij_datedebut, tij_datefin, tij_nature_assurance, and 12 more.
server/api/ijss/services/getDonneesPeriodesPourCalculIjssFromDsn.ts(7,11): error TS6196: 'Line' is declared but never used.
server/api/imports/router.ts(82,24): error TS2488: Type '{ [fieldname: string]: File[]; } | File[]' must have a '[Symbol.iterator]()' method that returns an iterator.
server/api/imports/router.ts(82,24): error TS2532: Object is possibly 'undefined'.
server/api/imports/router.ts(110,24): error TS2532: Object is possibly 'undefined'.
server/api/imports/router.ts(172,18): error TS2532: Object is possibly 'undefined'.
server/api/imports/router.ts(213,9): error TS6133: 'result' is declared but its value is never read.
server/api/imports/router.ts(215,36): error TS2345: Argument of type '{ inidId: any; utiId: number; pdosId: number; dsnFiles: { [fieldname: string]: Express.Multer.File[]; } | Express.Multer.File[] | undefined; }' is not assignable to parameter of type 'Cfg'.
  Types of property 'dsnFiles' are incompatible.
    Type '{ [fieldname: string]: File[]; } | File[] | undefined' is not assignable to type 'DsnFile[]'.
      Type 'undefined' is not assignable to type 'DsnFile[]'.
server/api/imports/services/dsn/createDataFromDsn.ts(70,22): error TS2339: Property 'id' does not exist on type '{}'.
server/api/imports/services/dsn/createDataFromDsn.ts(70,27): error TS2304: Cannot find name 'id'.
server/api/imports/services/dsn/entities/createAdhesionsPrevoyance.ts(29,13): error TS2322: Type 'string' is not assignable to type 'Date | undefined'.
server/api/imports/services/dsn/entities/createAdhesionsPrevoyance.ts(30,13): error TS2322: Type 'string' is not assignable to type 'number | undefined'.
server/api/imports/services/dsn/entities/createEct.ts(29,9): error TS2322: Type 'string' is not assignable to type 'Date | undefined'.
server/api/imports/services/dsn/entities/createPeriodes.ts(28,9): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/entities/createPeriodes.ts(29,9): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/entities/createPeriodes.ts(30,9): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/entities/createPeriodes.ts(31,9): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/entities/createPeriodes.ts(32,9): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/entities/createUserAccess.ts(21,13): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/getReprisesCumuls/getReprisesCumuls.ts(35,53): error TS6133: 'inidId' is declared but its value is never read.
server/api/imports/services/dsn/getReprisesCumuls/getReprisesCumuls.ts(37,9): error TS2741: Property 'success' is missing in type '{ contrats: never[]; }' but required in type 'Result'.
server/api/imports/services/dsn/getReprisesCumuls/getReprisesCumuls.ts(37,9): error TS6133: 'finalResult' is declared but its value is never read.
server/api/imports/services/dsn/getReprisesCumuls/getReprisesCumuls.ts(47,11): error TS6133: 'allResults' is declared but its value is never read.
server/api/imports/services/dsn/getReprisesCumuls/getReprisesCumuls.ts(55,11): error TS6133: 'bilan' is declared but its value is never read.
server/api/imports/services/dsn/getReprisesCumuls/getReprisesCumuls.ts(56,5): error TS2739: Type '{}' is missing the following properties from type 'Result': contrats, success
server/api/imports/services/dsn/getReprisesCumuls/processOneDsnForCumuls.ts(16,74): error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
server/api/imports/services/dsn/getReprisesCumuls/processOneDsnForCumuls.ts(21,11): error TS6133: 'results' is declared but its value is never read.
server/api/imports/services/dsn/getReprisesCumuls/processOneDsnForCumuls.ts(24,13): error TS2345: Argument of type '{ dsn: DsnEtab_S21_G00_11; bilanWriter: BilanWriter; }' is not assignable to parameter of type 'DsnEtab_S21_G00_11'.
  Object literal may only specify known properties, and 'dsn' does not exist in type 'DsnEtab_S21_G00_11'.
server/api/imports/services/dsn/getReprisesCumuls/processOneDsnForCumuls.ts(31,11): error TS6196: 'Cfg2' is declared but never used.
server/api/imports/services/dsn/getReprisesCumuls/processOneDsnForCumuls.ts(35,43): error TS6133: 'dsnEtab' is declared but its value is never read.
server/api/imports/services/dsn/getReprisesCumuls/processOneDsnForCumuls.ts(35,73): error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
server/api/imports/services/dsn/helpers/getLastDsn.ts(11,21): error TS2352: Conversion of type 'Dsn' to type 'DsnWithDate' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'Dsn' is missing the following properties from type 'DsnWithDate': dsn, date
server/api/imports/services/dsn/helpers/getLastDsn.ts(11,48): error TS2345: Argument of type '(dsnMax: DsnWithDate, dsn: Dsn) => { dsn: Dsn; date: Moment; } | undefined' is not assignable to parameter of type '(previousValue: DsnWithDate, currentValue: Dsn, currentIndex: number, array: Dsn[]) => DsnWithDate'.
  Type '{ dsn: Dsn; date: Moment; } | undefined' is not assignable to type 'DsnWithDate'.
    Type 'undefined' is not assignable to type 'DsnWithDate'.
server/api/imports/services/dsn/helpers/getRemBloc51FromDsnIndiv.ts(2,1): error TS6133: 'getDsnNodeValue' is declared but its value is never read.
server/api/imports/services/dsn/importDsnInit.ts(141,9): error TS2322: Type 'number | null' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/imports/services/dsn/importDsnInit.ts(141,35): error TS2454: Variable 'resultProcessDsn' is used before being assigned.
server/api/imports/services/dsn/importDsnInit.ts(147,27): error TS2454: Variable 'resultProcessDsn' is used before being assigned.
server/api/imports/services/dsn/processors/createAffiliationsDossier.ts(98,13): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/processors/createAffiliationsDossier.ts(104,40): error TS2345: Argument of type 'Partial<pay_affilorgpad_afod>' is not assignable to parameter of type 'DataForInsert<{ afod_id?: number | undefined; pad_id?: number | undefined; afod_numaffil?: null | undefined; afod_datedebut?: Date | undefined; afod_datefin?: Date | null | undefined; afod_peri_debut?: number | undefined; afod_peri_fin?: number | null | undefined; afod_notes?: null | undefined; rorg_id?: number | null | undefined; afod_periodicite_paiement?: number | undefined; mdp_id?: number | null | undefined; bnqd_id?: number | null | undefined; eta_id?: number | null | undefined; afod_type_paiement_dsn?: number | undefined; }>'.
server/api/imports/services/dsn/processors/createAffiliationsFromBordereaux.ts(53,13): error TS2322: Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/dsn/processors/createAffiliationsFromBordereaux.ts(59,13): error TS2345: Argument of type 'Partial<pay_affilorgpad_afod>' is not assignable to parameter of type 'DataForInsert<{ afod_id?: number | undefined; pad_id?: number | undefined; afod_numaffil?: null | undefined; afod_datedebut?: Date | undefined; afod_datefin?: Date | null | undefined; afod_peri_debut?: number | undefined; afod_peri_fin?: number | null | undefined; afod_notes?: null | undefined; rorg_id?: number | null | undefined; afod_periodicite_paiement?: number | undefined; mdp_id?: number | null | undefined; bnqd_id?: number | null | undefined; eta_id?: number | null | undefined; afod_type_paiement_dsn?: number | undefined; }>'.
  Types of property 'afod_numaffil' are incompatible.
    Type 'afod_numaffil | undefined' is not assignable to type 'null | undefined'.
      Type 'string' is not assignable to type 'null | undefined'.
server/api/imports/services/dsn/processors/processOneCnt.ts(82,9): error TS2322: Type 'string' is not assignable to type 'Date | undefined'.
server/api/imports/services/dsn/processors/processOneCnt.ts(85,9): error TS2322: Type 'string | null' is not assignable to type 'cnt_datefin_prevue | undefined'.
  Type 'string' is not assignable to type 'cnt_datefin_prevue | undefined'.
server/api/imports/services/dsn/processors/processOneCnt.ts(87,9): error TS2322: Type 'string | null' is not assignable to type 'cnt_quot_trav | undefined'.
  Type 'string' is not assignable to type 'cnt_quot_trav | undefined'.
server/api/imports/services/dsn/processors/processOneCnt.ts(90,9): error TS2322: Type 'string | null' is not assignable to type 'cnt_fin_date | undefined'.
  Type 'string' is not assignable to type 'cnt_fin_date | undefined'.
server/api/imports/services/dsn/processors/processOneEtab.ts(95,9): error TS2322: Type 'Result[]' is not assignable to type '{ sal: pay_salarie_sal; cnts: pay_contrat_cnt[]; }[]'.
  Type 'Result' is not assignable to type '{ sal: pay_salarie_sal; cnts: pay_contrat_cnt[]; }'.
    Types of property 'sal' are incompatible.
      Type 'pay_salarie_sal | undefined' is not assignable to type 'pay_salarie_sal'.
        Type 'undefined' is not assignable to type 'pay_salarie_sal'.
server/api/imports/services/dsn/processors/processOneIndiv.ts(56,9): error TS2322: Type 'string | null' is not assignable to type 'string | undefined'.
  Type 'null' is not assignable to type 'string | undefined'.
server/api/imports/services/dsn/processors/processOneIndiv.ts(63,9): error TS2322: Type 'string' is not assignable to type 'Date | undefined'.
server/api/imports/services/dsn/processors/processOneIndiv.ts(67,9): error TS2322: Type 'Moment | null' is not assignable to type 'sal_anciennete_date | undefined'.
  Type 'Moment' is not assignable to type 'Date'.
server/api/imports/services/ficheOC/transformers/P0958/getInfosRepartitionSalEmp.ts(87,62): error TS2345: Argument of type 'BaseMontantSpecifique[] | TAPrev' is not assignable to parameter of type 'BaseMontantSpecifique & { lib?: string | undefined; }'.
  Type 'BaseMontantSpecifique[]' is not assignable to type 'BaseMontantSpecifique & { lib?: string | undefined; }'.
    Type 'BaseMontantSpecifique[]' is missing the following properties from type 'BaseMontantSpecifique': LibelleCodeNature, ValeurCodeNature
server/api/imports/services/ficheOC/transformers/P0958/getNumeroOption.ts(5,169): error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
server/api/imports/services/ficheOC/transformers/P0958/transformElementsCalculs.ts(54,11): error TS2322: Type '(BaseMontantSpecifique & { lib: string; })[] | undefined' is not assignable to type '(BaseMontantSpecifique & { lib: string; })[]'.
  Type 'undefined' is not assignable to type '(BaseMontantSpecifique & { lib: string; })[]'.
server/api/imports/services/ficheOC/transformers/P0958/transformElementsCalculs.ts(57,13): error TS2322: Type 'number' is not assignable to type 'string | undefined'.
server/api/imports/services/ficheOC/updateIfoc.ts(11,5): error TS2322: Type '{ ifoc_id: number; uti_id?: number | undefined; ifoc_import_datetime?: Date | undefined; pad_id?: number | undefined; ifoc_origine?: number | undefined; eta_id?: number | null | undefined; ifoc_content_xml?: undefined; ifoc_content_json?: null | undefined; ifoc_bilan?: null | undefined; ifoc_dateheure_creation_fiche?: Date | null | undefined; ifoc_success: boolean | null; }' is not assignable to type 'void'.
server/api/imports/services/ficheOC/updateIfoc.ts(11,37): error TS2345: Argument of type 'CfgUpdateIfoc' is not assignable to parameter of type 'DataForUpdate<{ ifoc_id: number; uti_id?: number | undefined; ifoc_import_datetime?: Date | undefined; pad_id?: number | undefined; ifoc_origine?: number | undefined; eta_id?: number | null | undefined; ifoc_content_xml?: undefined; ifoc_content_json?: null | undefined; ifoc_bilan?: null | undefined; ifoc_dateheure_creation_fiche?: Date | null | undefined; ifoc_success: boolean | null; }>'.
  Types of property 'ifoc_content_xml' are incompatible.
    Type 'string | undefined' is not assignable to type 'undefined'.
      Type 'string' is not assignable to type 'undefined'.
server/api/imports/services/getTypeOrgSelonTypeRisque.ts(3,64): error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
server/api/imports/services/importPrevFromXml.ts(144,47): error TS2345: Argument of type 'Partial<pay_importficheoc_ifoc>' is not assignable to parameter of type 'CfgGetIfoc'.
  Property 'date_heure_creation_fiche' is missing in type 'Partial<pay_importficheoc_ifoc>' but required in type 'CfgGetIfoc'.
server/api/imports/services/importVvasPerFromCsv.ts(58,100): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/api/imports/services/importVvasPerFromCsv.ts(218,58): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/api/imports/services/importXmlPas.ts(140,13): error TS2322: Type 'string' is not assignable to type 'ipas_validite_date_debut | undefined'.
server/api/imports/services/importXmlPas.ts(141,13): error TS2322: Type 'string' is not assignable to type 'ipas_validite_date_fin | undefined'.
server/api/imports/services/importXmlPas.ts(531,16): error TS6133: 'getPeriodesCourantesForSals' is declared but its value is never read.
server/api/imports/services/importXmlPas.ts(563,5): error TS2739: Type 'any[]' is missing the following properties from type '{ salIds: number[]; ppaCourante: pay_periodepaye_ppa; }': salIds, ppaCourante
server/api/imports/services/processContrat.ts(145,69): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/imports/services/processFileParamFicheOc.ts(105,35): error TS2345: Argument of type 'Partial<ContratProcessed>' is not assignable to parameter of type 'ContratParsed'.
  Types of property 'prev_ref' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
server/api/login/router.ts(44,53): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/api/login/router.ts(63,62): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/api/login/services/storeUserSession.ts(32,33): error TS2345: Argument of type '{ appSessionId: any; currentUser: { scope: { sals: never[]; pads: number[]; }; pad_ids: number[]; pad: number; uti_id: number; sal_id: usr_utilisateur_utiFields.sal_id; uti_nom: string; uti_prenom: string; uti_pseudo: string; uti_access_to_business_dashboard: boolean; uti_superadmin: boolean; pdos_id: number; uti_display_image_profil: boolean; uti_access_param_generaux: boolean; uti_access_param_dossier: boolean; uti_access_kpis: boolean; uti_reconnection_auto: boolean; uti_access_tickets_dev: boolean; uti_access_gestion_interne: boolean; uti_access_portefeuille: boolean; sal_nom_usage: string; sal_prenom: string; sal_matricule: string; usec_main_route_locked: boolean; }; loginTime: string; lastcheckTime: null; }' is not assignable to parameter of type 'Session'.
  Types of property 'currentUser' are incompatible.
    Type '{ scope: { sals: never[]; pads: number[]; }; pad_ids: number[]; pad: number; uti_id: number; sal_id: sal_id; uti_nom: string; uti_prenom: string; uti_pseudo: string; uti_access_to_business_dashboard: boolean; uti_superadmin: boolean; pdos_id: number; uti_display_image_profil: boolean; uti_access_param_generaux: boolean; uti_access_param_dossier: boolean; uti_access_kpis: boolean; uti_reconnection_auto: boolean; uti_access_tickets_dev: boolean; uti_access_gestion_interne: boolean; uti_access_portefeuille: boolean; sal_nom_usage: string; sal_prenom: string; sal_matricule: string; usec_main_route_locked: boolean; }' is missing the following properties from type 'User': uti_email, currentPAD, currentGdpId, currentDOS, and 5 more.
server/api/login/services/storeUserSession.ts(34,10): error TS2339: Property 'appSessionId' does not exist on type 'UserSelected'.
server/api/passwords/router.ts(132,59): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/api/presences/router.ts(34,51): error TS2345: Argument of type '{ uti_id: number; }' is not assignable to parameter of type 'Params'.
  Type '{ uti_id: number; }' is missing the following properties from type 'Params': cnt_id, tsh_date_start, tsh_date_end, tsh_comment
server/api/presences/router.ts(55,9): error TS2339: Property 'arhAddMessage' does not exist on type 'Response'.
server/api/presences/router.ts(61,16): error TS2339: Property 'arhSendOk' does not exist on type 'Response'.
server/api/presences/router.ts(71,53): error TS2345: Argument of type '{ sal_id_manager: number | null; pad_id: number; }' is not assignable to parameter of type 'Params'.
  Types of property 'sal_id_manager' are incompatible.
    Type 'number | null' is not assignable to type 'number'.
      Type 'null' is not assignable to type 'number'.
server/api/presences/router.ts(84,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/presences/router.ts(87,20): error TS2345: Argument of type 'ParsedQs' is not assignable to parameter of type 'Params'.
  Type 'ParsedQs' is missing the following properties from type 'Params': cnt_id, nb
server/api/presences/router.ts(89,31): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/presences/router.ts(97,27): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/api/presences/router.ts(110,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/presences/router.ts(113,24): error TS2345: Argument of type 'ParsedQs' is not assignable to parameter of type 'Params'.
  Property 'cnt_id' is missing in type 'ParsedQs' but required in type 'Params'.
server/api/presences/router.ts(115,31): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/presences/router.ts(123,27): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/api/presences/router.ts(161,127): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/presences/services/getCurrentPeriodPointageDays.ts(8,26): error TS2307: Cannot find module '../../../reports/data/getDataRestitutionPresences' or its corresponding type declarations.
server/api/presences/services/submitTimesheet.ts(4,10): error TS6133: 'getCurrTs' is declared but its value is never read.
server/api/reports/router.ts(5,32): error TS6133: 'Awaited' is declared but its value is never read.
server/api/reports/router.ts(24,1): error TS6133: 'jobsDebouncer' is declared but its value is never read.
server/api/reports/router.ts(65,11): error TS2740: Type '{ pad_id: number; }' is missing the following properties from type 'SepaParams': peri, sal_id, sal_id_out, modePaiement, and 5 more.
server/api/reports/router.ts(127,17): error TS2794: Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
server/api/reports/router.ts(228,29): error TS2339: Property 'ceta_id' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(229,27): error TS2339: Property 'peri' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(230,29): error TS2339: Property 'pad_ids' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(231,36): error TS2339: Property 'estVersionDef' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(232,42): error TS2339: Property 'estVisibleEmployeur' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(233,29): error TS2339: Property 'lot_ids' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(234,29): error TS2339: Property 'cnt_ids' does not exist on type 'PayloadUpload'.
server/api/reports/router.ts(289,15): error TS2532: Object is possibly 'undefined'.
server/api/rh/actualites/router.ts(30,46): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/rh/actualites/router.ts(39,17): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/rh/actualites/router.ts(75,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/rh/actualites/router.ts(79,17): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/api/salaries/router.ts(33,31): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(33,70): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(39,55): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(41,59): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(42,13): error TS2339: Property 'arhAddMessage' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/salaries/router.ts(53,20): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/salaries/router.ts(58,81): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(58,120): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(60,16): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/salaries/router.ts(71,54): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/salaries/router.ts(73,20): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/salaries/router.ts(76,16): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/theme/router.ts(14,55): error TS2532: Object is possibly 'undefined'.
server/api/theme/router.ts(14,72): error TS2532: Object is possibly 'undefined'.
server/api/utils/replaceDomainName.ts(5,60): error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
server/api/variables/router.ts(40,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/variables/router.ts(43,68): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Params'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'Params': mvaId, padId, dateDebut, dateFin
server/api/variables/router.ts(44,34): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Params'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'Params': padId, mvaId
server/api/variables/router.ts(47,26): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/variables/router.ts(53,22): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/api/variables/router.ts(100,43): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Params'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'Params': padId, mvaId, rows
server/api/variables/router.ts(114,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/api/variables/router.ts(123,30): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/api/variables/router.ts(132,26): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/api/variables/router.ts(158,44): error TS2322: Type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to type 'number'.
server/api/variables/router.ts(159,16): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/variables/router.ts(203,29): error TS2339: Property 'cnt_ids' does not exist on type 'PayloadUpload'.
server/api/variables/router.ts(204,38): error TS2339: Property 'comment' does not exist on type 'PayloadUpload'.
server/api/variables/router.ts(205,40): error TS2339: Property 'modeSelectionCnt' does not exist on type 'PayloadUpload'.
server/api/variables/router.ts(206,27): error TS2339: Property 'peri' does not exist on type 'PayloadUpload'.
server/api/variables/services/insertVvaComment.ts(62,44): error TS2345: Argument of type 'Partial<pay_valeurvariable_vva>' is not assignable to parameter of type 'DataForInsert<{ vva_id?: number | undefined; vva_niveau?: number | undefined; vva_valeur?: undefined; vva_datedebut?: Date | undefined; vva_datefin?: Date | null | undefined; vva_periodedebut?: number | null | undefined; vva_periodefin?: number | null | undefined; vva_comm?: null | undefined; var_id?: number | undefined; cnt_id?: number | null | undefined; vva_id_externe?: null | undefined; lvva_id?: number | null | undefined; acrd_id?: number | null | undefined; tacc_id?: number | null | undefined; vva_type_peri?: number | undefined; peria_id?: number | null | undefined; sal_id?: number | null | undefined; euti_id?: number | null | undefined; emp_id?: number | null | undefined; vva_regul_peridebut?: number | null | undefined; vva_regul_perifin?: number | null | undefined; }>'.
  Types of property 'vva_valeur' are incompatible.
    Type 'string | undefined' is not assignable to type 'undefined'.
      Type 'string' is not assignable to type 'undefined'.
server/api/visitesMed/services/getInfosVisitesMed.ts(62,11): error TS6133: 'startDate' is declared but its value is never read.
server/api/workflows/absences/router.ts(27,23): error TS2345: Argument of type '{ pad_id: number; uti_id: number; }' is not assignable to parameter of type 'Params'.
  Property 'wdm_id' is missing in type '{ pad_id: number; uti_id: number; }' but required in type 'Params'.
server/api/workflows/absences/router.ts(31,22): error TS2339: Property 'wdm_id' does not exist on type '{ pad_id: number; uti_id: number; }'.
server/api/workflows/absences/router.ts(31,80): error TS2339: Property 'wdm_id' does not exist on type '{ pad_id: number; uti_id: number; }'.
server/api/workflows/absences/router.ts(41,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/absences/router.ts(42,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/absences/router.ts(47,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/absences/router.ts(50,20): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/absences/router.ts(82,46): error TS2345: Argument of type '{ uti_id: number; domainApp: APP_DOMAIN; }' is not assignable to parameter of type 'Params'.
  Type '{ uti_id: number; domainApp: APP_DOMAIN; }' is missing the following properties from type 'Params': wfrs_id, wfrs_status
server/api/workflows/absences/router.ts(95,80): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/api/workflows/router.ts(42,117): error TS2339: Property 'typeWorkflow' does not exist on type '{ uti_id: number; pad_id: number; sal_id: number | null; domainApp: APP_DOMAIN; }'.
server/api/workflows/router.ts(46,62): error TS2345: Argument of type '{ uti_id: number; pad_id: number; sal_id: number | null; domainApp: APP_DOMAIN; }' is not assignable to parameter of type 'Params'.
  Type '{ uti_id: number; pad_id: number; sal_id: number | null; domainApp: APP_DOMAIN; }' is missing the following properties from type 'Params': typeWorkflow, doc_id, data
server/api/workflows/router.ts(48,121): error TS2339: Property 'typeWorkflow' does not exist on type '{ uti_id: number; pad_id: number; sal_id: number | null; domainApp: APP_DOMAIN; }'.
server/api/workflows/router.ts(51,117): error TS2339: Property 'typeWorkflow' does not exist on type '{ uti_id: number; pad_id: number; sal_id: number | null; domainApp: APP_DOMAIN; }'.
server/api/workflows/router.ts(54,13): error TS2339: Property 'arhAddMessage' does not exist on type 'Response<any, Record<string, any>>'.
server/api/workflows/router.ts(59,16): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>>'.
server/api/workflows/router.ts(64,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(65,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(70,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(73,20): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(79,35): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(81,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(84,20): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(91,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(92,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(97,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(100,20): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(139,25): error TS2345: Argument of type '{ uti_id: number; domainApp: APP_DOMAIN; }' is not assignable to parameter of type 'Params'.
  Property 'wdm_id' is missing in type '{ uti_id: number; domainApp: APP_DOMAIN; }' but required in type 'Params'.
server/api/workflows/router.ts(166,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(167,21): error TS2339: Property 'session' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/api/workflows/router.ts(172,24): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/router.ts(175,20): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>, number>'.
server/api/workflows/services/changeStatusRunnedStep.ts(263,23): error TS2345: Argument of type '{ fk_id: number; origin: "WFRS"; pad_id: number; uti_id_target: number; desc: string; }' is not assignable to parameter of type 'Data'.
  Types of property 'origin' are incompatible.
    Type '"WFRS"' is not assignable to type 'NOTIFICATION_ORIGINE'.
server/api/workflows/services/wflChangeAdress.ts(1,43): error TS2305: Module '"../../../decla_main.d"' has no exported member 'IExtCallback'.
server/app/ArhRouter.spec.ts(20,17): error TS2322: Type '() => Promise<void>' is not assignable to type 'ArhService<unknown, any>'.
  Type 'Promise<void>' is not assignable to type 'ArhServiceResult<any> | Promise<ArhServiceResult<any>>'.
    Type 'Promise<void>' is not assignable to type 'Promise<ArhServiceResult<any>>'.
      Type 'void' is not assignable to type 'ArhServiceResult<any>'.
server/app/ArhRouter.spec.ts(41,21): error TS2322: Type '() => Promise<void>' is not assignable to type 'ArhService<unknown, any>'.
server/app/ArhRouter.spec.ts(55,21): error TS2322: Type '"postXX"' is not assignable to type 'RouteHttpVerb'.
server/app/ArhRouter.spec.ts(61,21): error TS2322: Type '() => Promise<void>' is not assignable to type 'ArhService<unknown, any>'.
server/app/ArhRouter.spec.ts(74,41): error TS2345: Argument of type '{ path: string; acl: { default: "deny"; rolesAuthorized: ROLES.ROLE_ID_INTERNE[]; }; }' is not assignable to parameter of type 'ArhRouteCfg<unknown, any>'.
  Type '{ path: string; acl: { default: "deny"; rolesAuthorized: ROLES.ROLE_ID_INTERNE[]; }; }' is missing the following properties from type 'ArhRouteCfg<unknown, any>': method, service
server/app/ArhRouter.spec.ts(98,21): error TS2322: Type '() => Promise<void>' is not assignable to type 'ArhService<unknown, any>'.
server/app/ArhRouter.ts(32,7): error TS2322: Type '<Payload = object>(req: AuthenticatedRequest<string, object>) => { file: File | undefined; files: { [fieldname: string]: File[]; } | File[] | undefined; }' is not assignable to type 'ArhRequestTransformer'.
  Type '{ file: Express.Multer.File | undefined; files: { [fieldname: string]: Express.Multer.File[]; } | Express.Multer.File[] | undefined; }' is not assignable to type 'Payload'.
    'Payload' could be instantiated with an arbitrary type which could be unrelated to '{ file: Express.Multer.File | undefined; files: { [fieldname: string]: Express.Multer.File[]; } | Express.Multer.File[] | undefined; }'.
server/app/ArhRouter.ts(168,33): error TS2314: Generic type 'ArhRouteCfg<Payload, Data>' requires 2 type argument(s).
server/app/app.ts(40,1): error TS6133: 'isString' is declared but its value is never read.
server/app/app.ts(56,11): error TS2339: Property '_sendErrorToAPM' does not exist on type 'Logger'.
server/app/app.ts(207,20): error TS2345: Argument of type 'Writable<Readonly<HelmetOptions>>' is not assignable to parameter of type 'Readonly<HelmetOptions>'.
  Types of property 'contentSecurityPolicy' are incompatible.
    Type 'Writable<MiddlewareOption<ContentSecurityPolicyOptions> | undefined>' is not assignable to type 'MiddlewareOption<ContentSecurityPolicyOptions> | undefined'.
      Type 'Writable<ContentSecurityPolicyOptions>' is not assignable to type 'MiddlewareOption<ContentSecurityPolicyOptions> | undefined'.
        Type 'Writable<ContentSecurityPolicyOptions>' is not assignable to type 'ContentSecurityPolicyOptions'.
          Types of property 'directives' are incompatible.
            Type 'Writable<Record<string, Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol> | undefined>' is not assignable to type 'Record<string, Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol> | undefined'.
              Type 'Writable<Record<string, Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol>>' is not assignable to type 'Record<string, Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol>'.
                Index signatures are incompatible.
                  Type 'Writable<Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol>' is not assignable to type 'Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol'.
                    Type 'Writable<Iterable<ContentSecurityPolicyDirectiveValue>>' is not assignable to type 'Iterable<ContentSecurityPolicyDirectiveValue> | unique symbol'.
                      Type 'Writable<Iterable<ContentSecurityPolicyDirectiveValue>>' is not assignable to type 'Iterable<ContentSecurityPolicyDirectiveValue>'.
                        Types of property '[Symbol.iterator]' are incompatible.
                          Type 'Writable<() => Iterator<ContentSecurityPolicyDirectiveValue, any, undefined>>' is not assignable to type '() => Iterator<ContentSecurityPolicyDirectiveValue, any, undefined>'.
                            Type 'Writable<() => Iterator<ContentSecurityPolicyDirectiveValue, any, undefined>>' provides no match for the signature '(): Iterator<ContentSecurityPolicyDirectiveValue, any, undefined>'.
server/app/app.ts(435,37): error TS2339: Property 'AccessControl' does not exist on type 'Config'.
server/app/app.ts(487,22): error TS2339: Property 'arhSendOk' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(497,22): error TS2339: Property 'arhAddMessage' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(499,13): error TS2339: Property 'arhMessages' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(499,32): error TS2339: Property 'arhMessages' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(504,22): error TS2339: Property 'arhAddMessages' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(506,13): error TS2339: Property 'arhMessages' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(506,32): error TS2339: Property 'arhMessages' does not exist on type 'Response<any, Record<string, any>>'.
server/app/app.ts(511,22): error TS2339: Property 'arhSendError' does not exist on type 'Response<any, Record<string, any>>'.
server/app/appUws.ts(60,42): error TS2345: Argument of type '{ semp_id: STATUT_EMPLOI_FONCTION_PUBLIQUE; pad_id: number; }' is not assignable to parameter of type 'Readonly<Input>'.
  Type '{ semp_id: STATUT_EMPLOI_FONCTION_PUBLIQUE; pad_id: number; }' is missing the following properties from type 'Readonly<Input>': ncnt_id, dpub_id, trem_id, rcdd_id, and 4 more.
server/app/appUws.ts(207,59): error TS6133: 'err' is declared but its value is never read.
server/app/appUws.ts(213,69): error TS6133: 'err' is declared but its value is never read.
server/app/appUws.ts(422,23): error TS2345: Argument of type '(e: any) => void' is not assignable to parameter of type '() => void'.
server/app/configureDbManager.ts(37,5): error TS2741: Property 'format' is missing in type 'import("/home/runner/work/payroll-app/payroll-app/server/db").CustomPool' but required in type 'import("/home/runner/work/payroll-app/payroll-app/server/dbManager/init").CustomPool'.
server/app/configureDbManager.ts(52,5): error TS2322: Type '(query: any, cnt: { cnt_id: number; }, externalCallback: (err?: Error | null | undefined) => void) => void' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: any, cnt: { cnt_id: number; }, externalCallback: (err?: Error | null | undefined) => void) => void' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'cnt' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type '{ cnt_id: number; }'.
        Type 'undefined' is not assignable to type '{ cnt_id: number; }'.
server/app/configureDbManager.ts(58,5): error TS2322: Type '(_query: any, cntModified: { cnt_id: number; }) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(_query: any, cntModified: { cnt_id: number; }) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'cntModified' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type '{ cnt_id: number; }'.
        Type 'undefined' is not assignable to type '{ cnt_id: number; }'.
server/app/configureDbManager.ts(65,5): error TS2322: Type '(query: any, cmr: { cmr_id: number; cnt_id: number; }, done: (err?: Error | null | undefined) => void) => void' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: any, cmr: { cmr_id: number; cnt_id: number; }, done: (err?: Error | null | undefined) => void) => void' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'cmr' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type '{ cmr_id: number; cnt_id: number; }'.
        Type 'undefined' is not assignable to type '{ cmr_id: number; cnt_id: number; }'.
server/app/configureDbManager.ts(71,5): error TS2322: Type '(query: Query, dab: DabModified, client?: PoolClient | undefined) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, dab: DabModified, client?: PoolClient | undefined) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'dab' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'DabModified'.
        Type 'undefined' is not assignable to type 'DabModified'.
server/app/configureDbManager.ts(78,5): error TS2322: Type '(query: Query, tij: TijModified) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, tij: TijModified) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'tij' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'TijModified'.
        Type 'undefined' is not assignable to type 'TijModified'.
server/app/configureDbManager.ts(85,5): error TS2322: Type '(query: Query, abs: AbsModified) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, abs: AbsModified) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'abs' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'AbsModified'.
        Type 'undefined' is not assignable to type 'Pick<pay_absence_abs, "sal_id" | "abs_id" | "cnt_id">'.
server/app/configureDbManager.ts(92,5): error TS2322: Type '(query: Query, vva: Vva) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, vva: Vva) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'vva' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'Vva'.
        Type 'undefined' is not assignable to type 'Vva'.
server/app/configureDbManager.ts(99,5): error TS2322: Type '(query: Query, vva: Vva) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, vva: Vva) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'vva' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'Vva'.
        Type 'undefined' is not assignable to type 'Vva'.
server/app/configureDbManager.ts(106,5): error TS2322: Type '(query: Query, vva: Vva) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, vva: Vva) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'vva' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'Vva'.
        Type 'undefined' is not assignable to type 'Vva'.
server/app/configureDbManager.ts(123,5): error TS2322: Type '(query: QueryForCdc, data: Data, client?: PoolClient | null | undefined) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: QueryForCdc, data: Data, client?: PoolClient | null | undefined) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'data' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'Data'.
        Type 'undefined' is not assignable to type 'Data'.
server/app/configureDbManager.ts(132,5): error TS2322: Type '(query: Query, art: ArtModified, client?: PoolClient | undefined) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(query: Query, art: ArtModified, client?: PoolClient | undefined) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'art' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'ArtModified'.
        Type 'undefined' is not assignable to type 'ArtModified'.
server/app/configureDbManager.ts(139,5): error TS2322: Type '(config: any, tsk: Tsk) => Promise<void>' is not assignable to type 'MethodToTrigger | MethodToTriggerAsync'.
  Type '(config: any, tsk: Tsk) => Promise<void>' is not assignable to type 'MethodToTrigger'.
    Types of parameters 'tsk' and 'user' are incompatible.
      Type 'UserInQuery | undefined' is not assignable to type 'Tsk'.
        Type 'undefined' is not assignable to type 'Tsk'.
server/app/middlewares/fileNormalizationMiddleware.ts(17,7): error TS2322: Type '<Payload = object>(req: AuthenticatedRequest<string, object>) => Promise<AuthenticatedRequest<string, object> | { file: File; files: MulterFilesType | undefined; }>' is not assignable to type 'ArhRequestTransformer'.
  Type 'Promise<AuthenticatedRequest<string, object> | { file: File; files: MulterFilesType | undefined; }>' is not assignable to type 'Payload'.
    'Payload' could be instantiated with an arbitrary type which could be unrelated to 'Promise<AuthenticatedRequest<string, object> | { file: File; files: MulterFilesType | undefined; }>'.
server/app/middlewares/fileNormalizationMiddleware.ts(22,53): error TS2345: Argument of type 'File | undefined' is not assignable to parameter of type 'File'.
  Type 'undefined' is not assignable to type 'File'.
server/app/routerApp.ts(29,13): error TS2339: Property 'arhRouteIsWhitelistedForAuth' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.
server/app/routerApp.ts(49,51): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/appSessions.ts(363,5): error TS2741: Property 'portefeuilles' is missing in type '{ uti_id: any; sal_id: any; uti_pseudo: any; uti_nom: any; uti_prenom: any; uti_email: any; uti_access_to_business_dashboard: any; uti_superadmin: any; pdos_id: any; currentPAD: any; currentDOS: any; currentGdpId: any; currentPdosId: any; currentUi: any; lots_id_granted: any; typesUi: any; scope: { sals: never[]; pads: number[]; }; }' but required in type 'User'.
server/auth/authentication.ts(37,38): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/buls/createBulForNewCnt.ts(49,43): error TS2741: Property 'cnt_date_paiement_stc' is missing in type '{ ppa: CntOnCurrentPpa; cnt_id: number; ncnt_id: number; cnt_debut_date: Date; cnt_fin_date: Schema.pay_contrat_cntFields.cnt_fin_date; sal_id: number; pad_id: number; cnt_salaire_mdp_id: number; }' but required in type 'CntForUpsertBul'.
server/compta/handleEcart.ts(35,15): error TS2740: Type '{ cpt_num: string; sens: string; mnt: number; cpt_type: number; }' is missing the following properties from type 'RowWithAna': mnt_avant_ventilation, anas, sal_matricule, sal_nom_usage, and 32 more.
server/compta/handleEcart.ts(44,32): error TS2345: Argument of type '{ cana_id: number; cana_lib: cta_compteana_canaFields.cana_lib; pana_id: number; cana_code: string; }' is not assignable to parameter of type 'AnaCnt'.
  Type '{ cana_id: number; cana_lib: cana_lib; pana_id: number; cana_code: string; }' is missing the following properties from type 'AnaCnt': sal_matricule, sal_nom_usage, sal_prenom, anct_id, and 4 more.
server/compta/selectAnaCnt.ts(7,18): error TS2320: Interface 'AnaCnt' cannot simultaneously extend types 'pay_anacontrat_anct' and 'cta_compteana_cana'.
  Named property 'cana_id' of types 'pay_anacontrat_anct' and 'cta_compteana_cana' are not identical.
server/compta/selectData.ts(129,32): error TS2345: Argument of type '{ displayRubs: boolean; detailRubs: boolean; rubRupture: null; peri_debut: number; peri_fin: number; outputType: "data" | "pdf" | "html" | "xlsx" | "sepa"; name: string; peri: number; pad_id: number; lot_id?: number[] | null | undefined; eta_id?: number[] | null | undefined; sal_id?: number[] | null | undefined; idFormat: number; csv: boolean; }' is not assignable to parameter of type 'CriteriaOD'.
  Property 'uorg_id' is missing in type '{ displayRubs: boolean; detailRubs: boolean; rubRupture: null; peri_debut: number; peri_fin: number; outputType: "data" | "pdf" | "html" | "xlsx" | "sepa"; name: string; peri: number; pad_id: number; lot_id?: number[] | null | undefined; eta_id?: number[] | null | undefined; sal_id?: number[] | null | undefined; idFormat: number; csv: boolean; }' but required in type 'CriteriaOD'.
server/compta/selectData.ts(186,53): error TS2345: Argument of type 'Pcta | null' is not assignable to parameter of type 'Pcta'.
  Type 'null' is not assignable to type 'Pcta'.
server/compta/ventilAna.ts(18,16): error TS2339: Property 'rowsDispatched' does not exist on type 'ResultAfterGrouping'.
server/compta/ventilAna.ts(101,31): error TS2339: Property 'anas' does not exist on type 'Row'.
server/compta/ventilAna.ts(101,42): error TS2339: Property 'anas' does not exist on type 'Row'.
server/compta/ventilAna.ts(136,29): error TS2352: Conversion of type 'RowToDispatch[]' to type 'RowWithAna[]' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
server/compta/ventilAna.ts(136,29): error TS2352: Conversion of type 'RowToDispatch[]' to type 'RowWithAna[]' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'RowToDispatch' is missing the following properties from type 'RowWithAna': mnt_avant_ventilation, anas, param_desc, cnt_id, and 31 more.
server/compta/ventilAna.ts(136,50): error TS2345: Argument of type 'RowWithAna' is not assignable to parameter of type 'RowToDispatch'.
  Type 'RowWithAna' is missing the following properties from type 'RowToDispatch': sal_nom_famille, sal_prenom, sal_ventil_compta
server/congesSpectacles/generateCS.ts(31,39): error TS2345: Argument of type 'Error | ErrorSQL | "STOP" | ErrorOrSkipNew' is not assignable to parameter of type 'Error | null'.
  Type '"STOP"' is not assignable to type 'Error | null'.
server/congesSpectacles/generateCS.ts(34,33): error TS2554: Expected 4 arguments, but got 3.
server/congesSpectacles/generateCS.ts(35,7): error TS2345: Argument of type '(errWaterfall: Error, file: string, fileName: string) => void' is not assignable to parameter of type 'AsyncResultCallback<string, Error>'.
server/congesSpectacles/generateCS.ts(245,9): error TS6133: 'dataRows' is declared but its value is never read.
server/congesSpectacles/generateCS.ts(246,9): error TS6133: 'debut' is declared but its value is never read.
server/congesSpectacles/generateCS.ts(247,9): error TS6133: 'fin' is declared but its value is never read.
server/congesSpectacles/generateCS.ts(249,9): error TS6133: 'header' is declared but its value is never read.
server/congesSpectacles/generateCS.ts(253,10): error TS2304: Cannot find name 'headers'.
server/congesSpectacles/generateCS.ts(262,4): error TS2304: Cannot find name 'headers'.
server/congesSpectacles/generateCS.ts(271,68): error TS2304: Cannot find name 'anneemois'.
server/dads/aed/processBuls.ts(6,1): error TS6133: 'bul' is declared but its value is never read.
server/dads/dadsMain.ts(52,25): error TS2554: Expected 3-6 arguments, but got 2.
server/dads/declaDads.ts(3,27): error TS2459: Module '"../payrollEngine/declaCalc.d"' declares 'Tat' locally, but it is not exported.
server/dads/declaDads.ts(159,18): error TS2320: Interface 'PaiementOps' cannot simultaneously extend types 'pay_paiementops_pops' and 'pay_banquedos_bnqd'.
  Named property 'bnqd_id' of types 'pay_paiementops_pops' and 'pay_banquedos_bnqd' are not identical.
server/dads/s30/s30.ts(39,44): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | undefined'.
server/dads/s30/s40/s40.ts(15,8): error TS1192: Module '"/home/runner/work/payroll-app/payroll-app/server/dads/s30/s40/s40_g28_15"' has no default export.
server/dads/writerDads.ts(38,24): error TS2345: Argument of type 'string | null' is not assignable to parameter of type 'string | undefined'.
server/dads/writerDads.ts(64,27): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string | undefined'.
  Type 'number' is not assignable to type 'string | undefined'.
server/dbManager/dbManager.spec.ts(50,13): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/dbManager.spec.ts(82,44): error TS2345: Argument of type '"fetch"' is not assignable to parameter of type 'OperationType'.
server/dbManager/dbManager.spec.ts(85,45): error TS2345: Argument of type '"fetch"' is not assignable to parameter of type 'OperationType'.
server/dbManager/dbManager.spec.ts(94,13): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/dbManager.spec.ts(124,13): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/dbManager.spec.ts(161,44): error TS2345: Argument of type '"fetch"' is not assignable to parameter of type 'OperationType'.
server/dbManager/dbManager.spec.ts(178,13): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/dbManager.spec.ts(219,44): error TS2345: Argument of type '"fetch"' is not assignable to parameter of type 'OperationType'.
server/dbManager/dbManager.spec.ts(236,13): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/dbManager.spec.ts(270,37): error TS2345: Argument of type '"fetch"' is not assignable to parameter of type 'OperationType'.
server/dbManager/dbManager.ts(156,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/errorHandling/customMessagesConfigs.ts(24,41): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'PG_ERROR_CODES'.
  Type 'undefined' is not assignable to type 'PG_ERROR_CODES'.
server/dbManager/executeQuery.spec.ts(57,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeQuery.spec.ts(68,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(102,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeQuery.spec.ts(113,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(155,17): error TS2322: Type '"update"' is not assignable to type 'OperationType'.
server/dbManager/executeQuery.spec.ts(167,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(185,46): error TS2345: Argument of type '{ query: Sinon.SinonSpy<any[], any>; release: Sinon.SinonFake; }' is not assignable to parameter of type 'PoolClient'.
server/dbManager/executeQuery.spec.ts(205,17): error TS2322: Type '"add"' is not assignable to type 'OperationType'.
server/dbManager/executeQuery.spec.ts(216,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(255,17): error TS2322: Type '"remove"' is not assignable to type 'OperationType'.
server/dbManager/executeQuery.spec.ts(266,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(317,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(351,17): error TS2322: Type '"remove"' is not assignable to type 'OperationType'.
server/dbManager/executeQuery.spec.ts(361,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/executeQuery.spec.ts(401,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.spec.ts(27,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.spec.ts(38,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.spec.ts(57,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.spec.ts(68,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.spec.ts(87,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.spec.ts(98,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersAfter.ts(32,44): error TS2769: No overload matches this call.
  Overload 1 of 2, '(query: Config, user?: UserInQuery | undefined, cb?: ((err?: Error | null | undefined, result?: any) => void) | undefined): boolean | void | Promise<any>', gave the following error.
    Argument of type 'Data' is not assignable to parameter of type 'UserInQuery'.
      Type 'Data' is missing the following properties from type 'UserInQuery': uti_id, sal_id, currentPAD, uti_superadmin, and 7 more.
  Overload 2 of 2, '(query: Config, user?: UserInQuery | undefined): boolean | void | Promise<any>', gave the following error.
    Argument of type 'Data' is not assignable to parameter of type 'UserInQuery'.
server/dbManager/executeTriggersAfter.ts(35,41): error TS2345: Argument of type 'Data' is not assignable to parameter of type 'UserInQuery'.
server/dbManager/executeTriggersBefore.spec.ts(26,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersBefore.spec.ts(36,17): error TS2322: Type 'string' is not assignable to type 'string[]'.
server/dbManager/executeTriggersBefore.spec.ts(37,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersBefore.spec.ts(48,48): error TS2345: Argument of type 'Config' is not assignable to parameter of type 'RawQuery'.
  Property 'params' is missing in type 'Config' but required in type 'RawQuery'.
server/dbManager/executeTriggersBefore.spec.ts(53,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersBefore.spec.ts(63,17): error TS2322: Type 'string' is not assignable to type 'string[]'.
server/dbManager/executeTriggersBefore.spec.ts(64,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersBefore.spec.ts(75,48): error TS2345: Argument of type 'Config' is not assignable to parameter of type 'RawQuery'.
server/dbManager/executeTriggersBefore.spec.ts(80,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersBefore.spec.ts(90,17): error TS2322: Type 'string' is not assignable to type 'string[]'.
server/dbManager/executeTriggersBefore.spec.ts(91,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/executeTriggersBefore.spec.ts(104,48): error TS2345: Argument of type 'Config' is not assignable to parameter of type 'RawQuery'.
server/dbManager/executeTriggersBefore.ts(90,44): error TS2769: No overload matches this call.
  Overload 1 of 2, '(query: Config, user?: UserInQuery | undefined, cb?: ((err?: Error | null | undefined, result?: any) => void) | undefined): boolean | void | Promise<any>', gave the following error.
    Argument of type '(errTrigger: any, shouldContinue: any) => void' is not assignable to parameter of type 'UserInQuery'.
      Type '(errTrigger: any, shouldContinue: any) => void' is missing the following properties from type 'UserInQuery': uti_id, sal_id, currentPAD, uti_superadmin, and 7 more.
  Overload 2 of 2, '(query: Config, user?: UserInQuery | undefined): boolean | void | Promise<any>', gave the following error.
    Argument of type '(errTrigger: any, shouldContinue: any) => void' is not assignable to parameter of type 'UserInQuery'.
server/dbManager/fetchAfterAdd.spec.ts(42,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/fetchAfterAdd.spec.ts(57,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/fetchAfterAdd.spec.ts(105,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/fetchAfterAdd.spec.ts(120,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/fetchAfterAdd.ts(23,2): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/formatPgError.spec.ts(22,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/formatPgError.spec.ts(23,17): error TS2322: Type 'Partial<DatabaseError>' is not assignable to type 'DatabaseError'.
  Types of property 'length' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
server/dbManager/formatPgError.spec.ts(38,19): error TS2741: Property 'message' is missing in type '{ length: number; name: "error"; severity: string; code: string; detail: string; hint: undefined; position: undefined; internalPosition: undefined; internalQuery: undefined; where: undefined; schema: string; table: string; column: undefined; dataType: undefined; constraint: string; file: string; line: string; routine: string; }' but required in type 'DatabaseError'.
server/dbManager/formatPgError.spec.ts(60,17): error TS2322: Type '"remove"' is not assignable to type 'OperationType'.
server/dbManager/formatPgError.spec.ts(71,34): error TS2339: Property 'code' does not exist on type 'Promise<CustomDatabaseError>'.
server/dbManager/formatPgError.spec.ts(72,34): error TS2339: Property 'message' does not exist on type 'Promise<CustomDatabaseError>'.
server/dbManager/formatPgError.spec.ts(87,39): error TS2322: Type '"add"' is not assignable to type 'OperationType'.
server/dbManager/formatPgError.spec.ts(87,61): error TS2322: Type 'Partial<DatabaseError>' is not assignable to type 'DatabaseError'.
server/dbManager/formatPgError.spec.ts(102,39): error TS2322: Type '"update"' is not assignable to type 'OperationType'.
server/dbManager/formatPgError.spec.ts(102,64): error TS2322: Type 'Partial<DatabaseError>' is not assignable to type 'DatabaseError'.
server/dbManager/formatPgError.spec.ts(129,39): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/formatPgError.spec.ts(129,63): error TS2322: Type 'Partial<DatabaseError>' is not assignable to type 'DatabaseError'.
server/dbManager/formatPgError.ts(200,4): error TS2322: Type 'string | undefined' is not assignable to type 'string | null'.
  Type 'undefined' is not assignable to type 'string | null'.
server/dbManager/formatPgError.ts(209,7): error TS2339: Property 'title' does not exist on type 'DatabaseError'.
server/dbManager/formatPgError.ts(248,109): error TS6133: 'keyTable' is declared but its value is never read.
server/dbManager/generateSql.spec.ts(57,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/generateSql.spec.ts(59,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/generateSql.spec.ts(109,17): error TS2322: Type '"add"' is not assignable to type 'OperationType'.
server/dbManager/generateSql.spec.ts(111,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/generateSql.spec.ts(152,17): error TS2322: Type '"update"' is not assignable to type 'OperationType'.
server/dbManager/generateSql.spec.ts(154,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/generateSql.spec.ts(214,17): error TS2322: Type '"remove"' is not assignable to type 'OperationType'.
server/dbManager/generateSql.spec.ts(216,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/generateSql.spec.ts(271,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/generateSql.spec.ts(300,17): error TS2322: Type '"remove"' is not assignable to type 'OperationType'.
server/dbManager/generateSql.spec.ts(302,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlFetch.spec.ts(68,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlFetch.spec.ts(120,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(61,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(117,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(169,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(217,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(265,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(308,17): error TS2739: Type '{ uti_id: number; currentPAD: number; lots_id_granted: number[]; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(338,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(377,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(417,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(458,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: null; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlParametersValues.spec.ts(500,17): error TS2739: Type '{ uti_id: number; currentPAD: number; currentGdpId: number; currentDOS: number; uti_superadmin: true; sal_id: null; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/getSqlSetStatement.spec.ts(56,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getSqlSetStatement.spec.ts(82,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(16,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(23,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(29,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(48,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(55,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(74,17): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/getTriggersToRun.spec.ts(80,26): error TS2322: Type '"fetch"' is not assignable to type 'OperationType'.
server/dbManager/processReferences.ts(117,47): error TS2345: Argument of type '"add" | OperationType' is not assignable to parameter of type 'OperationType'.
  Type '"add"' is not assignable to type 'OperationType'.
server/dbManager/stringifySqlFilter.spec.ts(39,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(120,17): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(142,46): error TS2345: Argument of type 'ConfigServerFilter | null' is not assignable to parameter of type 'ConfigServerFilter'.
  Type 'null' is not assignable to type 'ConfigServerFilter'.
server/dbManager/stringifySqlFilter.spec.ts(161,13): error TS2739: Type '{ uti_id: number; uti_superadmin: true; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(211,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(255,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(295,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(339,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(386,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(438,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(488,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(531,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(574,13): error TS2739: Type '{ uti_id: number; uti_superadmin: false; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(617,13): error TS2739: Type '{ uti_id: number; uti_superadmin: true; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(660,13): error TS2739: Type '{ uti_id: number; uti_superadmin: true; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/dbManager/stringifySqlFilter.spec.ts(703,13): error TS2739: Type '{ uti_id: number; uti_superadmin: true; sal_id: number; currentDOS: number; currentGdpId: number; currentPAD: number; lots_id_granted: number[]; }' is missing the following properties from type 'UserInQuery': pdos_id, currentPdosId, portefeuilles, currentUi
server/emailer/emailHtmlTemplate.ts(119,83): error TS2345: Argument of type 'ROLES | undefined' is not assignable to parameter of type 'ROLES'.
  Type 'undefined' is not assignable to type 'ROLES'.
server/emailer/emailer.ts(83,5): error TS2322: Type 'unknown' is not assignable to type 'SentMessageInfo | null'.
  Type 'unknown' is not assignable to type 'SentMessageInfo'.
server/graphql/login/resolvers.ts(32,6): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/graphql/resolvers/mutations/documents/saveDocs/resolver.ts(99,36): error TS2345: Argument of type 'Partial<cmn_document_doc>' is not assignable to parameter of type 'DataForUpdate<{ doc_title?: null | undefined; doc_comment?: null | undefined; doc_id?: undefined; doc_type?: undefined; doc_afficher_portail_salarie?: boolean | undefined; doc_date_portail_salarie?: Date | null | undefined; tdoc_id?: number | null | undefined; doc_id_sequenced?: number | undefined; doc_afficher_portail_employeur?: boolean | undefined; }>'.
  Types of property 'doc_title' are incompatible.
    Type 'doc_title | undefined' is not assignable to type 'null | undefined'.
      Type 'string' is not assignable to type 'null | undefined'.
server/graphql/resolvers/queries/absences/infosListeAbsencesMgr/resolver.ts(3,10): error TS2305: Module '"../../../../../dbManager/dbManager"' has no exported member 'ClientFilter'.
server/graphql/resolvers/queries/contrats/lastRem/resolver.ts(24,13): error TS2322: Type 'ecnt_montant_salaire' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/graphql/resolvers/queries/contrats/lastRem/resolver.ts(26,13): error TS2322: Type 'ecnt_quot_trav' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/graphql/resolvers/queries/contrats/lastRem/resolver.ts(27,75): error TS2345: Argument of type 'trem_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/graphql/resolvers/queries/contrats/lastRem/resolver.ts(35,5): error TS2322: Type '{ id: string; montantSalaire?: number | undefined; typeMontantSalaire?: number | undefined; tempsTravail?: number | undefined; tempsTravailDesc?: string | undefined; isTempsPartiel?: boolean | undefined; }' is not assignable to type 'GqlF<LastRemuneration>'.
  Type '{ id: string; montantSalaire?: number | undefined; typeMontantSalaire?: number | undefined; tempsTravail?: number | undefined; tempsTravailDesc?: string | undefined; isTempsPartiel?: boolean | undefined; }' is not assignable to type 'LastRemuneration'.
    Types of property 'montantSalaire' are incompatible.
      Type 'number | undefined' is not assignable to type 'number'.
        Type 'undefined' is not assignable to type 'number'.
server/graphql/resolvers/queries/cotisationsFraisDeSante/getCotisationsFraisDeSante/resolver.ts(52,40): error TS2345: Argument of type '{ src_id_force?: number | null | undefined; cnt_id?: number | undefined; ltrac_type?: number | null | undefined; emp_id?: number | null | undefined; pad_id: number; catc_id: number | null; ncnt_id: number; dpub_id: number | null; semp_id: number; trem_id: number | null; rcdd_id: number | null; euti_id: number | null; eta_id: number; src_id: number | null; peri_anneemois: number; lot_id: number; cnt_debut_date: Date; cnt_fin_date?: Date | undefined; }' is not assignable to parameter of type 'Readonly<Input>'.
  Types of property 'src_id_force' are incompatible.
    Type 'number | null | undefined' is not assignable to type 'src_id_force'.
      Type 'undefined' is not assignable to type 'src_id_force'.
server/graphql/resolvers/queries/login/checkLoginCredentials/resolver.ts(16,55): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string | null'.
server/graphql/utils/gqlUtils.ts(71,40): error TS2769: No overload matches this call.
  Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
    Argument of type 'string | Buffer' is not assignable to parameter of type 'ConcatArray<never>'.
      Type 'string' is not assignable to type 'ConcatArray<never>'.
  Overload 2 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
    Argument of type 'string | Buffer' is not assignable to parameter of type 'ConcatArray<never>'.
      Type 'string' is not assignable to type 'ConcatArray<never>'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(32,46): error TS2339: Property 'absenceHeures' does not exist on type 'Object'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(33,77): error TS2531: Object is possibly 'null'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(33,95): error TS2339: Property 'tab_id' does not exist on type 'Object'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(37,54): error TS2339: Property 'abs_datedebut' does not exist on type 'Object'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(38,52): error TS2339: Property 'abs_datefin' does not exist on type 'Object'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(39,51): error TS2339: Property 'abs_datedebut_commence_aprem' does not exist on type 'Object'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(40,48): error TS2339: Property 'abs_datefin_finit_matin' does not exist on type 'Object'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(42,17): error TS2322: Type '{ plhSemaine1: gta_planninghebdo_plh & { jours: number[]; }; ppla_desc: string; }' is not assignable to type 'DataGta'.
  The types of 'plhSemaine1.jours' are incompatible between these types.
    Type 'number[]' is not assignable to type 'Jph[]'.
      Type 'number' is not assignable to type 'Jph'.
server/graphql/workflows/infosForValidationAbsence/resolver.ts(45,17): error TS2741: Property 'jfs' is missing in type 'gta_calendrierjf_cjf' but required in type 'Cjf'.
server/helpdesk/routerHelpdesk.ts(27,9): error TS2322: Type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to type 'number | null | undefined'.
  Type 'string' is not assignable to type 'number | null | undefined'.
server/helpdesk/routerHelpdesk.ts(46,9): error TS2322: Type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to type 'string | undefined'.
  Type 'string[]' is not assignable to type 'string'.
server/helpdesk/zendesk/getInfosZdOrganization.ts(9,23): error TS2571: Object is of type 'unknown'.
server/helpdesk/zendesk/zdSearchRequestAsync.ts(5,9): error TS2571: Object is of type 'unknown'.
server/imports/genericImport.ts(146,5): error TS2322: Type '({ padId, config, csvRows }: ImportInput<Required<Pick<ConfigImporter, "mode" | "sal_identifier" | "modeCnt" | "cnt_identifier" | "numLigneDebut" | "csvSeparator">>>) => Promise<string[]>' is not assignable to type 'ImportData<ConfigImporter>'.
  Types of parameters '__0' and 'input' are incompatible.
    Type 'ImportInput<ConfigImporter>' is not assignable to type 'ImportInput<Required<Pick<ConfigImporter, "mode" | "sal_identifier" | "modeCnt" | "cnt_identifier" | "numLigneDebut" | "csvSeparator">>>'.
      Type 'ConfigImporter' is not assignable to type 'Required<Pick<ConfigImporter, "mode" | "sal_identifier" | "modeCnt" | "cnt_identifier" | "numLigneDebut" | "csvSeparator">>'.
        Types of property 'sal_identifier' are incompatible.
          Type 'IMPORT_IDENTIFIANT_SALARIE | undefined' is not assignable to type 'IMPORT_IDENTIFIANT_SALARIE'.
            Type 'undefined' is not assignable to type 'IMPORT_IDENTIFIANT_SALARIE'.
server/imports/getIdentifiersCntFromRowObject.ts(34,28): error TS2339: Property 'cnt_id' does not exist on type '{}'.
server/imports/getIdentifiersCntFromRowObject.ts(37,28): error TS2339: Property 'cnt_id_externe' does not exist on type '{}'.
server/imports/getIdentifiersCntFromRowObject.ts(40,28): error TS2339: Property 'cnt_debut_date' does not exist on type '{}'.
server/imports/getIdentifiersCntFromRowObject.ts(43,28): error TS2339: Property 'cnt_num' does not exist on type '{}'.
server/imports/getIdentifiersCntFromRowObject.ts(46,28): error TS2339: Property 'cnt_debut_date' does not exist on type '{}'.
server/imports/getIdentifiersCntFromRowObject.ts(47,28): error TS2339: Property 'cnt_num' does not exist on type '{}'.
server/imports/getIdentifiersSalFromRowObject.ts(34,28): error TS2339: Property 'sal_id' does not exist on type '{}'.
server/imports/getIdentifiersSalFromRowObject.ts(37,28): error TS2339: Property 'sal_matricule' does not exist on type '{}'.
server/imports/getIdentifiersSalFromRowObject.ts(40,28): error TS2339: Property 'sal_id_externe' does not exist on type '{}'.
server/imports/getIdentifiersSalFromRowObject.ts(43,28): error TS2339: Property 'sal_email' does not exist on type '{}'.
server/imports/getIdentifiersSalFromRowObject.ts(46,28): error TS2339: Property 'sal_nir' does not exist on type '{}'.
server/imports/getNameIdentifierSal.ts(3,7): error TS6133: 'map' is declared but its value is never read.
server/imports/getNameIdentifierSal.ts(11,10): error TS6133: 'getNameIdentifierSal' is declared but its value is never read.
server/imports/getNameIdentifierSal.ts(11,66): error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
server/imports/importAbs.ts(140,44): error TS2345: Argument of type 'IMPORT_MODE_IDENT_CONTRAT | undefined' is not assignable to parameter of type 'IMPORT_MODE_IDENT_CONTRAT'.
  Type 'undefined' is not assignable to type 'IMPORT_MODE_IDENT_CONTRAT'.
server/imports/importAbs.ts(155,35): error TS2322: Type 'string | number | boolean | null | undefined' is not assignable to type 'string | null | undefined'.
  Type 'number' is not assignable to type 'string | null | undefined'.
server/imports/importAbs.ts(155,68): error TS2322: Type 'string | number | boolean | null | undefined' is not assignable to type 'number | null | undefined'.
  Type 'string' is not assignable to type 'number | null | undefined'.
server/imports/importAnct.ts(118,9): error TS2322: Type 'RowObject[]' is not assignable to type 'RowObjectAnct[]'.
  Type 'RowObject' is missing the following properties from type 'RowObjectAnct': cana_id, anct_pct, anct_peridebut
server/imports/importAnct.ts(118,57): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; persist?: undefined; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: number; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist: boolean; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; persist?: undefined; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: number; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist: boolean; defaultValue?: undefined; allowNull?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importAnct.ts(226,45): error TS2345: Argument of type 'IMPORT_MODE_IDENT_CONTRAT | undefined' is not assignable to parameter of type 'IMPORT_MODE_IDENT_CONTRAT'.
server/imports/importContrats.ts(246,57): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; } | { name: string; type: string; defaultValue: null; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: number; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; persist?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; } | { name: string; type: string; defaultValue: null; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: number; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; persist?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importContrats.ts(249,51): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; } | { name: string; type: string; defaultValue: null; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: number; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; persist?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
server/imports/importContrats.ts(372,33): error TS2345: Argument of type 'import("/home/runner/work/payroll-app/payroll-app/server/imports/readSal").CntIdentifiers' is not assignable to parameter of type 'import("/home/runner/work/payroll-app/payroll-app/server/imports/readCnt").CntIdentifiers'.
  Types of property 'cnt_debut_date' are incompatible.
    Type 'Date | undefined' is not assignable to type 'string | undefined'.
      Type 'Date' is not assignable to type 'string'.
server/imports/importEct.ts(173,9): error TS2322: Type 'RowObject[]' is not assignable to type 'RowObjectEct[]'.
  Type 'RowObject' is missing the following properties from type 'RowObjectEct': emp_id, ect_classif_ech, ect_classif_niv, ect_classif_cat, and 3 more.
server/imports/importEct.ts(173,57): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; allowNull?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist: boolean; allowNull?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist: boolean; allowNull?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importEct.ts(281,45): error TS2345: Argument of type 'IMPORT_MODE_IDENT_CONTRAT | undefined' is not assignable to parameter of type 'IMPORT_MODE_IDENT_CONTRAT'.
server/imports/importEmplois.ts(105,57): error TS2345: Argument of type '({ name: string; type: string; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; } | { name: string; type: string; defaultValue: number; allowNull?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; } | { name: string; type: string; defaultValue: number; allowNull?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; allowNull?: undefined; defaultValue?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importEmplois.ts(162,91): error TS2345: Argument of type 'RowObject' is not assignable to parameter of type 'RowObjectEmp'.
  Type 'RowObject' is missing the following properties from type 'RowObjectEmp': emp_libelle_masculin, emp_libelle_feminin, acrd_id
server/imports/importIbans.spec.ts(1,8): error TS2613: Module '"/home/runner/work/payroll-app/payroll-app/server/imports/importIbans"' has no default export. Did you mean to use 'import { importIbans } from "/home/runner/work/payroll-app/payroll-app/server/imports/importIbans"' instead?
server/imports/importIbans.spec.ts(1,23): error TS2459: Module '"./importIbans"' declares 'Config' locally, but it is not exported.
server/imports/importIbans.ts(78,72): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; validators?: undefined; } | { name: string; type: string; persist?: undefined; validators?: undefined; } | { name: string; type: string; validators: { type: string; min: number; max: number; }; persist?: undefined; } | { name: string; type: string; validators: { type: string; min?: undefined; max?: undefined; }; persist?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist: boolean; validators?: undefined; } | { name: string; type: string; persist?: undefined; validators?: undefined; } | { name: string; type: string; validators: { type: string; min: number; max: number; }; persist?: undefined; } | { name: string; type: string; validators: { type: string; min?: undefined; max?: undefined; }; persist?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist: boolean; validators?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importIbans.ts(144,9): error TS6133: 'resultInsertion' is declared but its value is never read.
server/imports/importIbans.ts(148,47): error TS2345: Argument of type 'PoolClient' is not assignable to parameter of type 'DbClient'.
  Type 'PoolClient' is not assignable to type '{ begin: () => Promise<void>; commit: () => Promise<void>; rollback: () => Promise<void>; }'.
server/imports/importMutuelleInterim.ts(71,55): error TS2345: Argument of type 'ConfigImporter' is not assignable to parameter of type 'Config'.
  Property 'niveau' is missing in type 'ConfigImporter' but required in type 'Config'.
server/imports/importPrevoyanceInterim.ts(61,61): error TS2345: Argument of type 'ConfigImporter' is not assignable to parameter of type 'Config'.
  Property 'niveau' is missing in type 'ConfigImporter' but required in type 'Config'.
server/imports/importPrevoyanceInterim.ts(98,19): error TS2304: Cannot find name 'BulsOnCurrentPpa'.
server/imports/importSals.ts(161,57): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: number; persist?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: number; persist?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importUct.ts(128,9): error TS2322: Type 'RowObject[]' is not assignable to type 'RowObjectEct[]'.
  Type 'RowObject' is missing the following properties from type 'RowObjectEct': uorg_id, uct_datedebut, uct_datefin, uct_peridebut, rind_id
server/imports/importUct.ts(128,57): error TS2345: Argument of type '({ name: string; type: string; persist: boolean; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; persist?: undefined; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: null; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist: boolean; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; persist?: undefined; defaultValue?: undefined; allowNull?: undefined; } | { name: string; type: string; defaultValue: null; persist?: undefined; allowNull?: undefined; } | { name: string; type: string; allowNull: boolean; persist?: undefined; defaultValue?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist: boolean; defaultValue?: undefined; allowNull?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importUct.ts(236,45): error TS2345: Argument of type 'IMPORT_MODE_IDENT_CONTRAT | undefined' is not assignable to parameter of type 'IMPORT_MODE_IDENT_CONTRAT'.
server/imports/importVisitMed.ts(97,57): error TS2345: Argument of type '({ name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; persist?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: number; persist?: undefined; })[]' is not assignable to parameter of type 'ModelField[]'.
  Type '{ name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; persist: boolean; allowNull?: undefined; defaultValue?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: null; persist?: undefined; } | { name: string; type: string; allowNull: boolean; defaultValue: number; persist?: undefined; }' is not assignable to type 'ModelField'.
    Type '{ name: string; type: string; persist?: undefined; allowNull?: undefined; defaultValue?: undefined; }' is not assignable to type 'ModelField'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"string" | "number" | "boolean" | "int" | "float" | "date" | "arhDate"'.
server/imports/importVva.ts(99,60): error TS2345: Argument of type 'ConfigImporterEnhanced' is not assignable to parameter of type 'Config'.
  Types of property 'createBulRegul' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
server/imports/importVva.ts(165,54): error TS2345: Argument of type 'Config' is not assignable to parameter of type 'ConfigImporterEnhanced'.
  Type 'Config' is missing the following properties from type 'ConfigImporterEnhanced': inTransaction, identificationOnly
server/imports/importVva.ts(213,44): error TS2345: Argument of type 'IMPORT_MODE_IDENT_CONTRAT | undefined' is not assignable to parameter of type 'IMPORT_MODE_IDENT_CONTRAT'.
server/imports/importVva/defineCnt.ts(24,24): error TS2345: Argument of type 'CntRead | undefined' is not assignable to parameter of type 'CntRead | PromiseLike<CntRead>'.
  Type 'undefined' is not assignable to type 'CntRead | PromiseLike<CntRead>'.
server/imports/readSal.ts(91,5): error TS2345: Argument of type '{ skip: true; code: number; message: string; }' is not assignable to parameter of type 'ErrorOrSkipNew'.
  Object literal may only specify known properties, and 'code' does not exist in type 'ErrorOrSkipNew'.
server/imports/readSal.ts(99,5): error TS2345: Argument of type '{ skip: true; code: number; message: string; }' is not assignable to parameter of type 'ErrorOrSkipNew'.
  Object literal may only specify known properties, and 'code' does not exist in type 'ErrorOrSkipNew'.
server/imports/stripArrayIdentifiers.ts(1,10): error TS2724: '"./getIdentifiersSalFromRowObject"' has no exported member named 'salIdentifiers'. Did you mean 'isSalIdentifier'?
server/imports/stripArrayIdentifiers.ts(1,10): error TS6133: 'salIdentifiers' is declared but its value is never read.
server/imports/stripArrayIdentifiers.ts(2,10): error TS2724: '"./getIdentifiersCntFromRowObject"' has no exported member named 'cntIdentifiers'. Did you mean 'isCntIdentifier'?
server/imports/stripArrayIdentifiers.ts(2,10): error TS6133: 'cntIdentifiers' is declared but its value is never read.
server/modelLoader/modelLoader.spec.ts(118,64): error TS2554: Expected 2 arguments, but got 3.
server/modelLoader/modelLoader.spec.ts(125,116): error TS2554: Expected 2 arguments, but got 3.
server/modelLoader/modelLoader.spec.ts(178,59): error TS2554: Expected 2 arguments, but got 3.
server/monitoring/routerMonitoring.ts(15,9): error TS2322: Type '{ messages: { type: string; title: string; }[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/payrollEngine/PayrollEngine.ts(15,2): error TS2739: Type '{}' is missing the following properties from type '{ serverConfig: ServerConfig; dbConfig: any; }': serverConfig, dbConfig
server/payrollEngine/PayrollEngine.ts(222,3): error TS2322: Type 'pay_cumul_cml[]' is not assignable to type 'CmlInBul[]'.
server/payrollEngine/PayrollEngine.ts(223,3): error TS2322: Type 'BulSelected[]' is not assignable to type 'BulInCalc[]'.
  Type 'BulSelected' is missing the following properties from type 'BulInCalc': sandbox, iCurrentRub, cjfs, statutRegimeAm
server/payrollEngine/PayrollEngine.ts(280,3): error TS2322: Type '() => void' is not assignable to type '{ (): Promise<void>; (handler: () => void): void; }'.
  Type 'void' is not assignable to type 'Promise<void>'.
server/payrollEngine/PayrollEngine.ts(313,35): error TS2345: Argument of type 'PoolClient' is not assignable to parameter of type 'DbClient'.
  Type 'PoolClient' is not assignable to type '{ begin: () => Promise<void>; commit: () => Promise<void>; rollback: () => Promise<void>; }'.
server/payrollEngine/PayrollEngine.ts(344,9): error TS2322: Type 'RubSelectedCalc[]' is not assignable to type 'RubInCalc[]'.
server/payrollEngine/PayrollEngine.ts(492,10): error TS2790: The operand of a 'delete' operator must be optional.
server/payrollEngine/PayrollEngine.ts(500,18): error TS2345: Argument of type 'PoolClient' is not assignable to parameter of type 'DbClient'.
  Type 'PoolClient' is not assignable to type '{ begin: () => Promise<void>; commit: () => Promise<void>; rollback: () => Promise<void>; }'.
server/payrollEngine/PayrollEngine.ts(522,39): error TS2345: Argument of type 'PoolClient' is not assignable to parameter of type 'DbClient'.
  Type 'PoolClient' is not assignable to type '{ begin: () => Promise<void>; commit: () => Promise<void>; rollback: () => Promise<void>; }'.
server/payrollEngine/PayrollFunctions.ts(67,28): error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
server/payrollEngine/PayrollFunctions.ts(67,36): error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
server/payrollEngine/absences/filterPtabsApplicables.ts(31,27): error TS2345: Argument of type '(number | T | (() => IterableIterator<T>) | (() => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }) | (() => string) | (() => string) | (() => T | undefined) | ((...items: T[]) => number) | { (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; } | ((separator?: string | undefined) => string) | (() => T[]) | (() => T | undefined) | ((start?: number | undefined, end?: number | undefined) => T[]) | ((compareFn?: ((a: T, b: T) => number) | undefined) => T[]) | { (start: number, deleteCount?: number | undefined): T[]; (start: number, deleteCount: number, ...items: T[]): T[]; } | ((...items: T[]) => number) | ((searchElement: T, fromIndex?: number | undefined) => number) | ((searchElement: T, fromIndex?: number | undefined) => number) | { <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; } | ((predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any) => U[]) | { <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]; } | { (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U; } | { (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U; } | { <S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined; } | ((predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any) => number) | ((value: T, start?: number | undefined, end?: number | undefined) => T[]) | ((target: number, start: number, end?: number | undefined) => T[]) | (() => IterableIterator<[number, T]>) | (() => IterableIterator<number>) | (() => IterableIterator<T>) | ((searchElement: T, fromIndex?: number | undefined) => boolean) | (<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]))[]' is not assignable to parameter of type 'T[]'.
  Type 'number | T | (() => IterableIterator<T>) | (() => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }) | (() => string) | (() => string) | (() => T | undefined) | ((...items: T[]) => number) | { (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; } | ((separator?: string | undefined) => string) | (() => T[]) | (() => T | undefined) | ((start?: number | undefined, end?: number | undefined) => T[]) | ((compareFn?: ((a: T, b: T) => number) | undefined) => T[]) | { (start: number, deleteCount?: number | undefined): T[]; (start: number, deleteCount: number, ...items: T[]): T[]; } | ((...items: T[]) => number) | ((searchElement: T, fromIndex?: number | undefined) => number) | ((searchElement: T, fromIndex?: number | undefined) => number) | { <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; } | ((predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any) => U[]) | { <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]; } | { (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U; } | { (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U; } | { <S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined; } | ((predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any) => number) | ((value: T, start?: number | undefined, end?: number | undefined) => T[]) | ((target: number, start: number, end?: number | undefined) => T[]) | (() => IterableIterator<[number, T]>) | (() => IterableIterator<number>) | (() => IterableIterator<T>) | ((searchElement: T, fromIndex?: number | undefined) => boolean) | (<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[])' is not assignable to type 'T'.
    'T' could be instantiated with an arbitrary type which could be unrelated to 'number | T | (() => IterableIterator<T>) | (() => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }) | (() => string) | (() => string) | (() => T | undefined) | ((...items: T[]) => number) | { (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; } | ((separator?: string | undefined) => string) | (() => T[]) | (() => T | undefined) | ((start?: number | undefined, end?: number | undefined) => T[]) | ((compareFn?: ((a: T, b: T) => number) | undefined) => T[]) | { (start: number, deleteCount?: number | undefined): T[]; (start: number, deleteCount: number, ...items: T[]): T[]; } | ((...items: T[]) => number) | ((searchElement: T, fromIndex?: number | undefined) => number) | ((searchElement: T, fromIndex?: number | undefined) => number) | { <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; } | ((predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) => void) | (<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any) => U[]) | { <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]; } | { (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U; } | { (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U; } | { <S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined; } | ((predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any) => number) | ((value: T, start?: number | undefined, end?: number | undefined) => T[]) | ((target: number, start: number, end?: number | undefined) => T[]) | (() => IterableIterator<[number, T]>) | (() => IterableIterator<number>) | (() => IterableIterator<T>) | ((searchElement: T, fromIndex?: number | undefined) => boolean) | (<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[])'.
server/payrollEngine/absences/filterPtabsApplicables.ts(55,27): error TS2345: Argument of type 'Ptab' is not assignable to parameter of type 'PtabSelected'.
  Type 'Ptab' is missing the following properties from type 'PtabSelected': acrd_id, ptab_methode_retenue, ptab_desc, tab, and 14 more.
server/payrollEngine/absences/filterPtabsApplicables.ts(65,5): error TS2322: Type 'PtabSelected[]' is not assignable to type 'T[]'.
  Type 'PtabSelected' is not assignable to type 'T'.
    'PtabSelected' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'Ptab'.
server/payrollEngine/absences/ijss/selectItemsIjss.ts(48,26): error TS2345: Argument of type '{ rub_id: number; neutraliserSiCalculNetAuBrut: true; rub_type: number; num_occur: number; selectionExplain: string; range: { datedebut: moment.Moment; datefin: moment.Moment; }; tij: Tij; }' is not assignable to parameter of type 'RubSelectedCalc'.
  Property 'skipCalculation' is missing in type '{ rub_id: number; neutraliserSiCalculNetAuBrut: true; rub_type: number; num_occur: number; selectionExplain: string; range: { datedebut: moment.Moment; datefin: moment.Moment; }; tij: Tij; }' but required in type 'RubSelectedCalc'.
server/payrollEngine/absences/ijss/selectItemsIjss.ts(94,30): error TS2345: Argument of type '{ rub_id: number; neutraliserSiCalculNetAuBrut: true; rub_type: number; num_occur: number; selectionExplain: string; range: { datedebut: moment.Moment; datefin: moment.Moment; }; tij: Tij; }' is not assignable to parameter of type 'RubSelectedCalc'.
  Property 'skipCalculation' is missing in type '{ rub_id: number; neutraliserSiCalculNetAuBrut: true; rub_type: number; num_occur: number; selectionExplain: string; range: { datedebut: moment.Moment; datefin: moment.Moment; }; tij: Tij; }' but required in type 'RubSelectedCalc'.
server/payrollEngine/absences/maintien/processOneArret.ts(53,9): error TS2322: Type 'sal_anciennete_date' is not assignable to type 'Date'.
  Type 'null' is not assignable to type 'Date'.
server/payrollEngine/absences/selectRubsIndem.ts(77,36): error TS2345: Argument of type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: moment.Moment; datefin: moment.Moment; }; }' is not assignable to parameter of type 'RubSelectedWithDabs'.
  Type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: Moment; datefin: Moment; }; }' is missing the following properties from type 'RubSelectedWithDabs': rub_type, skipCalculation
server/payrollEngine/absences/selectRubsIndem.ts(119,36): error TS2345: Argument of type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: moment.Moment; datefin: moment.Moment; }; }' is not assignable to parameter of type 'RubSelectedWithDabs'.
  Type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: Moment; datefin: Moment; }; }' is missing the following properties from type 'RubSelectedWithDabs': rub_type, skipCalculation
server/payrollEngine/absences/selectRubsIndem.ts(159,36): error TS2345: Argument of type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: moment.Moment; datefin: moment.Moment; }; }' is not assignable to parameter of type 'RubSelectedWithDabs'.
  Type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: Moment; datefin: Moment; }; }' is missing the following properties from type 'RubSelectedWithDabs': rub_type, skipCalculation
server/payrollEngine/absences/selectRubsRetenue.ts(62,23): error TS2739: Type '{ rub_id: number; selectionExplain: string; num_occur: number; dabs: DabInCalc[]; range: { datedebut: Moment; datefin: Moment; }; }' is missing the following properties from type 'RubSelectedWithDabs': rub_type, skipCalculation
server/payrollEngine/absences/selectSpecificItems.ts(17,19): error TS2345: Argument of type '{ rub_id: number; num_occur: number; selectionExplain: string; range: { datedebut: moment.Moment; datefin: moment.Moment; }; }' is not assignable to parameter of type 'RubSelectedCalc'.
  Type '{ rub_id: number; num_occur: number; selectionExplain: string; range: { datedebut: Moment; datefin: Moment; }; }' is missing the following properties from type 'RubSelectedCalc': rub_type, skipCalculation
server/payrollEngine/bulsMgr/deleteLBL.ts(11,28): error TS2503: Cannot find namespace 'pg'.
server/payrollEngine/bulsMgr/insertBppla.ts(9,32): error TS2339: Property 'length' does not exist on type 'ProfilPlanning'.
server/payrollEngine/bulsMgr/insertBppla.ts(23,27): error TS2488: Type 'ProfilPlanning' must have a '[Symbol.iterator]()' method that returns an iterator.
server/payrollEngine/bulsMgr/insertCMB.ts(64,126): error TS2345: Argument of type 'Cmb[] | undefined' is not assignable to parameter of type 'Cmb[] | null'.
  Type 'undefined' is not assignable to type 'Cmb[] | null'.
server/payrollEngine/bulsMgr/insertCMB.ts(96,81): error TS2345: Argument of type 'cmr_val_ann_cnt' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(97,87): error TS2345: Argument of type 'cmr_val_duree_cnt' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(105,87): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(106,93): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(170,92): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(171,79): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(235,90): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(237,93): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(245,88): error TS2345: Argument of type 'cmr_val_ann_cnt' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
server/payrollEngine/bulsMgr/insertCMB.ts(246,92): error TS2345: Argument of type 'cmr_val_duree_cnt' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
server/payrollEngine/bulsMgr/insertCald.ts(111,63): error TS2345: Argument of type 'string | number | boolean' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/bulsMgr/updateDabs.ts(34,25): error TS2322: Type 'string | number | boolean | null' is not assignable to type 'number | null'.
  Type 'string' is not assignable to type 'number | null'.
server/payrollEngine/bulsMgr/updateDabs.ts(38,25): error TS2322: Type 'string | number | boolean | null' is not assignable to type 'number | null'.
server/payrollEngine/bulsMgr/upsertCalb.ts(58,13): error TS2304: Cannot find name 'tools'.
server/payrollEngine/calculateQuotiteForfaitAnnuel.spec.ts(24,54): error TS2345: Argument of type '{ pare_fj_methode_prorata: number; pare_fj_prorata_neutr_cp: boolean; pare_quot_coll_ref: number; peri_anneemois: number; }' is not assignable to parameter of type 'Pare'.
  Property 'trem_id' is missing in type '{ pare_fj_methode_prorata: number; pare_fj_prorata_neutr_cp: boolean; pare_quot_coll_ref: number; peri_anneemois: number; }' but required in type 'Pare'.
server/payrollEngine/calculateQuotiteForfaitAnnuel.spec.ts(46,54): error TS2345: Argument of type '{ pare_fj_methode_prorata: number; pare_fj_prorata_neutr_cp: boolean; pare_quot_coll_ref: number; peri_anneemois: number; }' is not assignable to parameter of type 'Pare'.
  Property 'trem_id' is missing in type '{ pare_fj_methode_prorata: number; pare_fj_prorata_neutr_cp: boolean; pare_quot_coll_ref: number; peri_anneemois: number; }' but required in type 'Pare'.
server/payrollEngine/communication/sendEndToMainProcess.ts(10,5): error TS2322: Type 'string | null' is not assignable to type 'string'.
  Type 'null' is not assignable to type 'string'.
server/payrollEngine/computeResults/computeOnePeriod.ts(142,5): error TS2322: Type 'pay_cumul_cml[]' is not assignable to type 'CmlInBul[]'.
  Type 'pay_cumul_cml' is missing the following properties from type 'CmlInBul': valeur_en_cours, valeur_en_cours_autres_contrats
server/payrollEngine/computeResults/computeOnePeriod.ts(158,5): error TS2322: Type 'RubSelectedCalc[]' is not assignable to type 'RubInCalc[]'.
  Type 'RubSelectedCalc' is missing the following properties from type 'RubInCalc': rub_code, rub_lib, rub_desc, rub_affich_dates_abs, and 12 more.
server/payrollEngine/computeResults/computeOnePeriod.ts(220,24): error TS2345: Argument of type 'pay_cumul_cml[]' is not assignable to parameter of type 'CmlInBul[]'.
server/payrollEngine/computeResults/defineWeeks.spec.ts(10,13): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(12,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(32,13): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(34,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(50,13): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(52,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(68,13): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(70,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(72,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(74,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/computeResults/defineWeeks.spec.ts(76,16): error TS2740: Type '{ vva_datefin: Date; }' is missing the following properties from type 'VvaMinified': vva_id, vva_valeur, vva_datedebut, var_id, and 2 more.
server/payrollEngine/defineNetItems.ts(2,1): error TS6192: All imports in import declaration are unused.
server/payrollEngine/druMgr/abs/getQuotiteAbsence.spec.ts(146,49): error TS2345: Argument of type '{}' is not assignable to parameter of type 'BulData'.
  Property 'cnt' is missing in type '{}' but required in type 'BulData'.
server/payrollEngine/druMgr/abs/getQuotiteAbsence.spec.ts(172,17): error TS2322: Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/abs/getQuotiteAbsence.spec.ts(179,17): error TS2322: Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/abs/getQuotiteBaseRetenue.spec.ts(48,24): error TS2554: Expected 4 arguments, but got 3.
server/payrollEngine/druMgr/abs/getQuotiteBaseRetenue.spec.ts(94,24): error TS2554: Expected 4 arguments, but got 3.
server/payrollEngine/druMgr/abs/getQuotiteBaseRetenue.spec.ts(140,24): error TS2554: Expected 4 arguments, but got 3.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(72,119): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(78,51): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
  Type 'CmlInBul' is not assignable to type 'CmlCached'.
    Types of property 'valeur_en_cours_autres_contrats' are incompatible.
      Type 'number | null' is not assignable to type 'number | undefined'.
        Type 'null' is not assignable to type 'number | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(149,61): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(153,73): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(157,77): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(179,64): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML.ts(183,66): error TS2345: Argument of type 'CmlInBul | undefined' is not assignable to parameter of type 'CmlCached | undefined'.
server/payrollEngine/druMgr/cml/getDRUValue_CML_ANN_CNT_ENCOURS.ts(118,24): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/druMgr/cml/getDRUValue_CML_ANN_CNT_ENCOURS.ts(166,5): error TS2322: Type 'number' is not assignable to type 'null'.
server/payrollEngine/druMgr/cml/getDRUValue_CML_ANN_CNT_ENCOURS.ts(166,24): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/payrollEngine/druMgr/cml/getDRUValue_CML_ANN_TOUS_CONTRATS.ts(62,31): error TS2345: Argument of type '{ name: string; value: number | null; }' is not assignable to parameter of type 'CmlReturned'.
  Types of property 'name' are incompatible.
    Type 'string' is not assignable to type '"valeur_en_cours" | "valeur_en_cours_autres_contrats" | "valeur_ann_cnt" | "valeur_ann_cnt_tous_contrats" | "valeur_duree_cnt" | "valeur_duree_cnt_tous_contrats" | "valeur_en_cours_cnt_precedent" | "valeur_n_derniers_mois_cnt" | "valeur_n_derniers_mois_tous_contrats"'.
server/payrollEngine/druMgr/defineRangesBouclage.spec.ts(69,39): error TS2344: Type '{}' does not satisfy the constraint 'BaseVva'.
  Type '{}' is missing the following properties from type 'BaseVva': vva_id, vva_valeur, vva_datedebut, vva_datefin
server/payrollEngine/druMgr/defineRangesBouclage.ts(52,25): error TS2339: Property 'sort' does not exist on type 'readonly Readonly<VVA & BaseVva>[]'.
server/payrollEngine/druMgr/druMgr.ts(282,29): error TS2339: Property 'skip' does not exist on type 'Error | ResultSkip'.
  Property 'skip' does not exist on type 'Error'.
server/payrollEngine/druMgr/getDRUValue_ABS.ts(178,85): error TS2345: Argument of type '{ dab_nb: number | null; uab_code: string; uab_id: number; ptab: { ptab_forcer_nb: boolean; acrd_niveau: number; acrd_id: number; ptab_methode_retenue: number; ptab_desc: string; tab: pay_typeabsence_tab; ptab_id: number; tab_id: number; rub_id_retenue: rub_id_retenue; rub_id_indem: rub_id_indem; ptab_unite_autor: number; ptab_lib_interne: ptab_lib_interne; ptab_msal_type: number; rub_id_indem_2: rub_id_indem_2; rub_id_indem_3: rub_id_indem_3; ptab_reuse_rub_indem: boolean; ptab_methode_retenue_specif_heures: ptab_methode_retenue_specif_heures; ptab_espace_emp_explications: ptab_espace_emp_explications; ptab_activer: boolean; }; aABS_DRU?: any[] | undefined; aMSAL_DRU?: DruInCalc[] | undefined; isGrouped?: boolean | undefined; dab_datefin: Date; dab_datedebut: Date; dab_id: number; abs_id: number; abs_calcul_type: number; tab_id: number; abs_datedebut: Date; abs_datefin: Date; abs_datedebut_commence_aprem: boolean; abs_datefin_finit_matin: boolean; cmsal_id: cmsal_id; tab_code: string; tab_taux_maintien: tab_taux_maintien; tab_lib: string; mart_id: mart_id; ppa_reference: pay_periodepaye_ppa; passage_peri_anneemois: number; explain?: string | undefined; dab_commence_aprem: boolean; dab_finit_matin: boolean; }[]' is not assignable to parameter of type 'DabForQuotiteAbs[]'.
  Type '{ dab_nb: number | null; uab_code: string; uab_id: number; ptab: { ptab_forcer_nb: boolean; acrd_niveau: number; acrd_id: number; ptab_methode_retenue: number; ptab_desc: string; tab: pay_typeabsence_tab; ptab_id: number; tab_id: number; rub_id_retenue: pay_paramtab_ptabFields.rub_id_retenue; rub_id_indem: pay_paramtab_ptabFields.rub_id_indem; ptab_unite_autor: number; ptab_lib_interne: pay_paramtab_ptabFields.ptab_lib_interne; ptab_msal_type: number; rub_id_indem_2: pay_paramtab_ptabFields.rub_id_indem_2; rub_id_indem_3: pay_paramtab_ptabFields.rub_id_indem_3; ptab_reuse_rub_indem: boolean; ptab_methode_retenue_specif_heures: pay_paramtab_ptabFields.ptab_methode_retenue_specif_heures; ptab_espace_emp_explications: pay_paramtab_ptabFields.ptab_espace_emp_explications; ptab_activer: boolean; }; aABS_DRU?: any[] | undefined; aMSAL_DRU?: DruInCalc[] | undefined; isGrouped?: boolean | undefined; dab_datefin: Date; dab_datedebut: Date; dab_id: number; abs_id: number; abs_calcul_type: number; tab_id: number; abs_datedebut: Date; abs_datefin: Date; abs_datedebut_commence_aprem: boolean; abs_datefin_finit_matin: boolean; cmsal_id: pay_absence_absFields.cmsal_id; tab_code: string; tab_taux_maintien: pay_typeabsence_tabFields.tab_taux_maintien; tab_lib: string; mart_id: pay_typeabsence_tabFields.mart_id; ppa_reference: pay_periodepaye_ppa; passage_peri_anneemois: number; explain?: string | undefined; dab_commence_aprem: boolean; dab_finit_matin: boolean; }' is not assignable to type 'DabForQuotiteAbs'.
    Type '{ dab_nb: number | null; uab_code: string; uab_id: number; ptab: { ptab_forcer_nb: boolean; acrd_niveau: number; acrd_id: number; ptab_methode_retenue: number; ptab_desc: string; tab: pay_typeabsence_tab; ptab_id: number; tab_id: number; rub_id_retenue: pay_paramtab_ptabFields.rub_id_retenue; rub_id_indem: pay_paramtab_ptabFields.rub_id_indem; ptab_unite_autor: number; ptab_lib_interne: pay_paramtab_ptabFields.ptab_lib_interne; ptab_msal_type: number; rub_id_indem_2: pay_paramtab_ptabFields.rub_id_indem_2; rub_id_indem_3: pay_paramtab_ptabFields.rub_id_indem_3; ptab_reuse_rub_indem: boolean; ptab_methode_retenue_specif_heures: pay_paramtab_ptabFields.ptab_methode_retenue_specif_heures; ptab_espace_emp_explications: pay_paramtab_ptabFields.ptab_espace_emp_explications; ptab_activer: boolean; }; aABS_DRU?: any[] | undefined; aMSAL_DRU?: DruInCalc[] | undefined; isGrouped?: boolean | undefined; dab_datefin: Date; dab_datedebut: Date; dab_id: number; abs_id: number; abs_calcul_type: number; tab_id: number; abs_datedebut: Date; abs_datefin: Date; abs_datedebut_commence_aprem: boolean; abs_datefin_finit_matin: boolean; cmsal_id: pay_absence_absFields.cmsal_id; tab_code: string; tab_taux_maintien: pay_typeabsence_tabFields.tab_taux_maintien; tab_lib: string; mart_id: pay_typeabsence_tabFields.mart_id; ppa_reference: pay_periodepaye_ppa; passage_peri_anneemois: number; explain?: string | undefined; dab_commence_aprem: boolean; dab_finit_matin: boolean; }' is not assignable to type 'Pick<DabInCalc, "dab_datefin" | "dab_datedebut" | "dab_nb" | "uab_id" | "dab_commence_aprem" | "dab_finit_matin">'.
      Types of property 'dab_nb' are incompatible.
        Type 'number | null' is not assignable to type 'number'.
          Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/getDRUValue_CNT.ts(17,37): error TS2345: Argument of type 'cnt_fin_date' is not assignable to parameter of type 'string | Date'.
  Type 'null' is not assignable to type 'string | Date'.
server/payrollEngine/druMgr/getDRUValue_CNT.ts(30,37): error TS2345: Argument of type 'cnt_datefin_prevue' is not assignable to parameter of type 'string | Date'.
  Type 'null' is not assignable to type 'string | Date'.
server/payrollEngine/druMgr/getDRUValue_CNT.ts(34,45): error TS2339: Property 'cnt_datefin_duree_minimale' does not exist on type 'CntInCalc'.
server/payrollEngine/druMgr/getDRUValue_EFF.ts(116,40): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
server/payrollEngine/druMgr/getDRUValue_MSAL.ts(40,17): error TS2322: Type 'Date' is not assignable to type 'string | number | boolean | null'.
  Type 'Date' is not assignable to type 'number'.
server/payrollEngine/druMgr/getDRUValue_MSAL.ts(50,17): error TS2322: Type 'Date' is not assignable to type 'string | number | boolean | null'.
server/payrollEngine/druMgr/getDRUValue_PARE.ts(29,5): error TS2322: Type 'string' is not assignable to type 'number | null'.
server/payrollEngine/druMgr/getDruValueAbs.spec.ts(11,40): error TS2740: Type '{ abs_datedebut: Date; abs_datefin: Date; dab_datedebut: Date; dab_datefin: Date; abs_datedebut_commence_aprem: false; abs_datefin_finit_matin: false; dab_commence_aprem: false; dab_finit_matin: false; }' is missing the following properties from type 'DabInCalc': ptab, dab_id, dab_nb, abs_id, and 11 more.
server/payrollEngine/druMgr/getDruValueAbs.spec.ts(27,40): error TS2740: Type '{ abs_datedebut: Date; abs_datefin: Date; dab_datedebut: Date; dab_datefin: Date; abs_datedebut_commence_aprem: true; abs_datefin_finit_matin: false; dab_commence_aprem: true; dab_finit_matin: false; }' is missing the following properties from type 'DabInCalc': ptab, dab_id, dab_nb, abs_id, and 11 more.
server/payrollEngine/druMgr/getDruValueAbs.spec.ts(46,40): error TS2740: Type '{ abs_datedebut: Date; abs_datefin: Date; dab_datedebut: Date; dab_datefin: Date; abs_datedebut_commence_aprem: true; abs_datefin_finit_matin: true; dab_commence_aprem: true; dab_finit_matin: true; }' is missing the following properties from type 'DabInCalc': ptab, dab_id, dab_nb, abs_id, and 11 more.
server/payrollEngine/druMgr/getDruValueAbs.spec.ts(65,40): error TS2740: Type '{ abs_datedebut: Date; abs_datefin: Date; dab_datedebut: Date; dab_datefin: Date; abs_datedebut_commence_aprem: true; abs_datefin_finit_matin: false; dab_commence_aprem: true; dab_finit_matin: false; }' is missing the following properties from type 'DabInCalc': ptab, dab_id, dab_nb, abs_id, and 11 more.
server/payrollEngine/druMgr/getDruValueAbs.spec.ts(84,40): error TS2740: Type '{ abs_datedebut: Date; abs_datefin: Date; dab_datedebut: Date; dab_datefin: Date; abs_datedebut_commence_aprem: false; abs_datefin_finit_matin: false; dab_commence_aprem: false; dab_finit_matin: false; }' is missing the following properties from type 'DabInCalc': ptab, dab_id, dab_nb, abs_id, and 11 more.
server/payrollEngine/druMgr/getDruValueVarNivAutres.ts(125,21): error TS2339: Property 'peri_eta' does not exist on type 'DruInCalc'.
server/payrollEngine/druMgr/getDruValueVarNivAutres.ts(171,21): error TS2339: Property 'peri_emp' does not exist on type 'DruInCalc'.
server/payrollEngine/druMgr/getDruValueVarNivAutres.ts(219,21): error TS2339: Property 'peri_uorg' does not exist on type 'DruInCalc'.
server/payrollEngine/druMgr/getDruValueVarNivCcn.ts(45,66): error TS2339: Property 'acrd_id' does not exist on type '{ ccn_id: number; }'.
server/payrollEngine/druMgr/getDruValueVarNivNat.ts(9,110): error TS6133: 'rub' is declared but its value is never read.
server/payrollEngine/druMgr/getDruValueVarNivPad.ts(8,110): error TS6133: 'rub' is declared but its value is never read.
server/payrollEngine/druMgr/getNbJrsAcquisMoisProfilCpAnc.ts(68,16): error TS2531: Object is possibly 'null'.
server/payrollEngine/druMgr/getNbJrsAcquisMoisProfilCpAnc.ts(83,17): error TS2322: Type 'pcpa_type_debut_attribution' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/getNbJrsAcquisMoisProfilCpAnc.ts(93,17): error TS2322: Type 'pcpa_type_debut_attribution' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/getNbJrsAcquisMoisProfilCpAnc.ts(104,9): error TS2322: Type 'number | null | undefined' is not assignable to type 'number | null'.
  Type 'undefined' is not assignable to type 'number | null'.
server/payrollEngine/druMgr/getNbJrsAcquisMoisProfilCpAnc.ts(174,144): error TS2531: Object is possibly 'null'.
server/payrollEngine/druMgr/getNewRubOccurences.ts(1,1): error TS6133: 'DruInCalc' is declared but its value is never read.
server/payrollEngine/druMgr/getNewRubOccurences.ts(41,9): error TS2322: Type 'Readonly<Readonly<Pick<RubInCalc, "range" | "rub_desc" | "loopMultipleValues">> & Readonly<BaseRub> & { rub_desc: string; }>' is not assignable to type 'Readonly<RUB>'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(47,25): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(49,6): error TS2365: Operator '+=' cannot be applied to types 'string | number' and 'number'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(49,26): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(64,68): error TS2345: Argument of type 'DRU_VAR_MULTIVAL_DISTINCT | null' is not assignable to parameter of type 'MODE_DISTINCTION | null'.
  Type 'DRU_VAR_MULTIVAL_DISTINCT.PAR_DATEDEBUT' is not assignable to type 'MODE_DISTINCTION | null'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(70,6): error TS2365: Operator '+=' cannot be applied to types 'string | number' and 'number'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(83,25): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(85,6): error TS2365: Operator '+=' cannot be applied to types 'string | number' and 'number'.
server/payrollEngine/druMgr/getOperationResultOnMultipleValues.ts(85,26): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/druMgr/getRubsBouclageToInsert.spec.ts(127,4): error TS2322: Type '({ datedebut: Moment; datefin: Moment; drus: { dru_id: number; value: number; vvas: { vva_id: number; var_id: number; vva_periodedebut: number; vva_periodefin: number; vva_niveau: number; vva_datedebut: Date; vva_datefin: Date; cnt_id: number; vva_valeur: string; dru_id: number; }[]; }[]; } | { datedebut: Moment; datefin: Moment; drus: { dru_id: number; value: number; vva: { vva_id: number; var_id: number; vva_periodedebut: number; vva_periodefin: number; vva_niveau: number; vva_datedebut: Date; vva_datefin: Date; cnt_id: number; vva_valeur: string; dru_id: number; }[]; }[]; })[]' is not assignable to type 'Readonly<RangeBouclage<BaseVva>>[]'.
  Type '{ datedebut: Moment; datefin: Moment; drus: { dru_id: number; value: number; vvas: { vva_id: number; var_id: number; vva_periodedebut: number; vva_periodefin: number; vva_niveau: number; vva_datedebut: Date; vva_datefin: Date; cnt_id: number; vva_valeur: string; dru_id: number; }[]; }[]; } | { datedebut: Moment; datefin: Moment; drus: { dru_id: number; value: number; vva: { vva_id: number; var_id: number; vva_periodedebut: number; vva_periodefin: number; vva_niveau: number; vva_datedebut: Date; vva_datefin: Date; cnt_id: number; vva_valeur: string; dru_id: number; }[]; }[]; }' is not assignable to type 'Readonly<RangeBouclage<BaseVva>>'.
    Type '{ datedebut: Moment; datefin: Moment; drus: { dru_id: number; value: number; vvas: { vva_id: number; var_id: number; vva_periodedebut: number; vva_periodefin: number; vva_niveau: number; vva_datedebut: Date; vva_datefin: Date; cnt_id: number; vva_valeur: string; dru_id: number; }[]; }[]; }' is missing the following properties from type 'Readonly<RangeBouclage<BaseVva>>': isDebutPeriode, commentaire, is_regul
server/payrollEngine/druMgr/insertNewRubOccurrencesForBouclage.spec.ts(122,41): error TS2740: Type 'BaseRubCheckDruBouclage' is missing the following properties from type 'RubInCalc': rub_type, rub_code, rub_affich_dates_abs, tij, and 12 more.
server/payrollEngine/druMgr/insertNewRubOccurrencesForBouclage.spec.ts(264,41): error TS2322: Type 'BaseRubCheckDruBouclage' is not assignable to type 'RubInCalc'.
server/payrollEngine/druMgr/insertNewRubOccurrencesForBouclage.ts(45,36): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/druMgr/insertNewRubOccurrencesForBouclage.ts(140,30): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
  Type 'number' is not assignable to type 'string'.
server/payrollEngine/druMgr/prev/getDruValueDataPrev.ts(132,71): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/prev/getDruValueDataPrev.ts(132,118): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/prev/getDruValueDataPrev.ts(144,71): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/prev/getDruValueDataPrev.ts(144,118): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/prev/getDruValueDataPrev.ts(291,31): error TS2339: Property 'rrub_annul_peri_debut' does not exist on type 'Annul'.
server/payrollEngine/druMgr/prev/getDruValueDataPrev.ts(292,29): error TS2339: Property 'rrub_annul_peri_fin' does not exist on type 'Annul'.
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(29,5): error TS2739: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is missing the following properties from type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }': ppa_id, ppa_abs_datedebut, ppa_abs_datefin, ppa_datereglement, peri_anneemois
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(37,5): error TS2322: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is not assignable to type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }'.
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(45,5): error TS2322: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is not assignable to type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }'.
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(53,5): error TS2322: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is not assignable to type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }'.
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(61,5): error TS2322: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is not assignable to type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }'.
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(69,5): error TS2739: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is missing the following properties from type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }': ppa_id, ppa_abs_datedebut, ppa_abs_datefin, ppa_datereglement, peri_anneemois
server/payrollEngine/druMgr/prev/getProrataEsCotisPrev.spec.ts(77,5): error TS2739: Type '{ ppa_datedebut: Date; ppa_datefin: Date; }' is missing the following properties from type '{ ppa_id: number; ppa_datedebut: Date; ppa_datefin: Date; ppa_abs_datedebut: Date; ppa_abs_datefin: Date; ppa_datereglement: Date; peri_anneemois: number; }': ppa_id, ppa_abs_datedebut, ppa_abs_datefin, ppa_datereglement, peri_anneemois
server/payrollEngine/druMgr/processDruValue.ts(52,17): error TS2345: Argument of type 'string | number | boolean | null' is not assignable to parameter of type 'string | number'.
  Type 'null' is not assignable to type 'string | number'.
server/payrollEngine/druMgr/profilCp/getAcquisitionCpMoisCalculee.ts(71,14): error TS2540: Cannot assign to 'pacp' because it is a read-only property.
server/payrollEngine/druMgr/prtt/getAcquisitionRttMois.ts(23,13): error TS2322: Type 'mrtt_nbj_sal' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/prtt/getAcquisitionRttMois.ts(24,13): error TS2322: Type 'mrtt_nbj_pat' is not assignable to type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/druMgr/prtt/getAcquisitionRttMois.ts(40,16): error TS2454: Variable 'nbSal' is used before being assigned.
server/payrollEngine/druMgr/prtt/getAcquisitionRttMois.ts(41,16): error TS2454: Variable 'nbPat' is used before being assigned.
server/payrollEngine/druMgr/reguls/getDruValueForAnnulRub.ts(11,115): error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
server/payrollEngine/druMgr/reguls/getDruValueForAnnulRub.ts(41,142): error TS2531: Object is possibly 'null'.
server/payrollEngine/druMgr/vva/cacheVvaMgr.ts(27,25): error TS2345: Argument of type '{ var_id: number; valueFound: boolean; niveauFound: number; value: string | number | boolean | null; vva: Schema.pay_valeurvariable_vva[] | null; }' is not assignable to parameter of type 'VvaCached'.
  Types of property 'niveauFound' are incompatible.
    Type 'number' is not assignable to type '1 | 2 | 5'.
server/payrollEngine/executeFormula.ts(35,20): error TS2339: Property 'cnt_desc' does not exist on type 'BulInCalc'.
server/payrollEngine/getDataForItemsConditions.ts(30,5): error TS2322: Type 'PosConv | null' is not assignable to type 'PosConv | undefined'.
  Type 'null' is not assignable to type 'PosConv | undefined'.
server/payrollEngine/getDataForItemsConditions.ts(92,9): error TS2322: Type 'PoolClient' is not assignable to type 'DbClient'.
  Type 'PoolClient' is missing the following properties from type '{ begin: () => Promise<void>; commit: () => Promise<void>; rollback: () => Promise<void>; }': begin, commit, rollback
server/payrollEngine/getDataForItemsConditions.ts(242,5): error TS2322: Type 'Tat | null' is not assignable to type 'Tat | undefined'.
  Type 'null' is not assignable to type 'Tat | undefined'.
server/payrollEngine/getDataForItemsConditions.ts(250,5): error TS2740: Type 'ProfilPlanning[]' is missing the following properties from type 'ProfilPlanning': ppla_desc, acrd_niveau, origin, ppla_id, and 24 more.
server/payrollEngine/getPosConv.ts(85,21): error TS2322: Type 'string' is not assignable to type 'smc_coef'.
server/payrollEngine/getPosConv.ts(89,17): error TS2322: Type 'boolean | undefined' is not assignable to type 'boolean'.
server/payrollEngine/getPosConv.ts(90,17): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/payrollEngine/getPosConv.ts(535,13): error TS2322: Type 'string' is not assignable to type 'smc_coef'.
server/payrollEngine/getPosConv.ts(539,9): error TS2322: Type 'boolean | undefined' is not assignable to type 'boolean'.
  Type 'undefined' is not assignable to type 'boolean'.
server/payrollEngine/getPosConv.ts(540,9): error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/payrollEngine/getPosConv.ts(547,68): error TS6133: 'peri' is declared but its value is never read.
server/payrollEngine/getPosConv.ts(547,89): error TS6133: 'dateVigueur' is declared but its value is never read.
server/payrollEngine/getRubData.ts(38,5): error TS2322: Type 'import("/home/runner/work/payroll-app/payroll-app/server/payrollEngine/selectAlc").Alc[]' is not assignable to type 'import("/home/runner/work/payroll-app/payroll-app/server/payrollEngine/declaCalc").Alc[]'.
  Type 'Alc' is missing the following properties from type 'Alc': valeur_en_cours, valeur_en_cours_apres
server/payrollEngine/launchCalcBuls.ts(23,8): error TS2741: Property 'settingsByBul' is missing in type '{ type: number; pad_id: number; uti_id: number; bul_id: number[]; clp_origine: CALCULPAIE_ORIGINE; settings: {}; }' but required in type 'CalcRequestParams'.
server/payrollEngine/monitoring/trackMemory.ts(3,21): error TS2686: '_' refers to a UMD global, but the current file is a module. Consider adding an import instead.
server/payrollEngine/netAuBrut/computeTauxSalRemontee.ts(13,30): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/netAuBrut/computeTauxSalRemontee.ts(23,38): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/netAuBrut/computeTauxSalRemontee.ts(28,47): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/netAuBrut/computeTauxSalRemontee.ts(33,47): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/netAuBrut/defineNetCible.spec.ts(11,22): error TS2741: Property 'valeur_en_cours_autres_contrats' is missing in type '{ cml_id: number; valeur_en_cours: number; cml_arrondi_calcul: number; cml_type_raz_ann: number; }' but required in type 'CmlInBul'.
server/payrollEngine/netAuBrut/defineNetCible.spec.ts(42,22): error TS2741: Property 'valeur_en_cours_autres_contrats' is missing in type '{ cml_id: number; valeur_en_cours: number; cml_arrondi_calcul: number; cml_type_raz_ann: number; }' but required in type 'CmlInBul'.
server/payrollEngine/netAuBrut/defineNetCible.spec.ts(71,22): error TS2741: Property 'valeur_en_cours_autres_contrats' is missing in type '{ cml_id: number; valeur_en_cours: number; cml_arrondi_calcul: number; cml_type_raz_ann: number; }' but required in type 'CmlInBul'.
server/payrollEngine/peria/checkPeriaCatc.ts(19,44): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/peria/checkPeriaDpub.ts(19,44): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/peria/checkPeriaTrem.ts(19,44): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/peria/checkTypeLieuTrav.ts(19,45): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/profiles/selectPpla.ts(200,34): error TS2345: Argument of type 'peria_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/selectBulsToRecalculate.ts(597,5): error TS2322: Type 'string' is not assignable to type 'Date'.
server/payrollEngine/selectBulsToRecalculate.ts(598,5): error TS2322: Type 'string' is not assignable to type 'cnt_fin_date'.
server/payrollEngine/selectBulsToRecalculate.ts(638,5): error TS2322: Type 'string' is not assignable to type 'Date'.
server/payrollEngine/selectBulsToRecalculate.ts(639,5): error TS2322: Type 'string' is not assignable to type 'Date'.
server/payrollEngine/selectBulsToRecalculate.ts(640,5): error TS2322: Type 'string' is not assignable to type 'Date'.
server/payrollEngine/selectBulsToRecalculate.ts(641,5): error TS2322: Type 'string' is not assignable to type 'Date'.
server/payrollEngine/selectBulsToRecalculate.ts(655,4): error TS2739: Type '{ calculer: false; netCible: null; iterations: never[]; }' is missing the following properties from type '{ calculer: boolean; type: number; varIdVariant: number; nextValueForVarId: number; netCible: { mnt: number; explain: string; } | null; iterations: IterationNetAuBrut[]; }': type, varIdVariant, nextValueForVarId
server/payrollEngine/selectItems/checkSelectionRub.ts(139,50): error TS2532: Object is possibly 'undefined'.
server/payrollEngine/selectItems/checkSelectionRub.ts(204,42): error TS2533: Object is possibly 'null' or 'undefined'.
server/payrollEngine/selectItems/checkSelectionRub.ts(212,42): error TS2533: Object is possibly 'null' or 'undefined'.
server/payrollEngine/selectItems/checkSelectionRub.ts(238,44): error TS2533: Object is possibly 'null' or 'undefined'.
server/payrollEngine/selectItems/checkSelectionRub.ts(246,44): error TS2533: Object is possibly 'null' or 'undefined'.
server/payrollEngine/selectItems/checkSelectionRub.ts(270,17): error TS2533: Object is possibly 'null' or 'undefined'.
server/payrollEngine/selectItems/checkSelectionRub.ts(329,17): error TS2322: Type 'boolean | null | undefined' is not assignable to type 'boolean | null'.
  Type 'undefined' is not assignable to type 'boolean | null'.
server/payrollEngine/selectItems/checkSelectionRub.ts(331,21): error TS2322: Type 'boolean | null' is not assignable to type 'boolean'.
  Type 'null' is not assignable to type 'boolean'.
server/payrollEngine/selectItems/checkSelectionRub.ts(460,50): error TS2345: Argument of type 'dpub_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/selectItems/checkSelectionRub.ts(813,17): error TS2339: Property 'cprevApplied' does not exist on type 'RubRead'.
server/payrollEngine/selectItems/checkSelectionRub.ts(842,35): error TS2339: Property 'cprevApplied' does not exist on type 'RubRead'.
server/payrollEngine/selectItems/checkSelectionRub.ts(842,54): error TS2339: Property 'cprevApplied' does not exist on type 'RubRead'.
server/payrollEngine/selectItems/conditions/checkConditionCprev.ts(137,36): error TS2345: Argument of type 'Cprev' is not assignable to parameter of type 'CprevApplied'.
  Property 'ccpr' is missing in type 'Cprev' but required in type 'CprevApplied'.
server/payrollEngine/selectItems/conditions/checkConditionEff.ts(35,93): error TS2345: Argument of type 'number' is not assignable to parameter of type '1 | 2'.
server/payrollEngine/selectPACP.ts(65,17): error TS2322: Type 'ProfilCp | null' is not assignable to type 'ProfilCp'.
  Type 'null' is not assignable to type 'ProfilCp'.
server/payrollEngine/selectPACP.ts(235,34): error TS2345: Argument of type 'peria_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/selectPARE.ts(279,34): error TS2345: Argument of type 'peria_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/selectPASS.ts(35,17): error TS2322: Type 'Pass | null' is not assignable to type 'Pass'.
  Type 'null' is not assignable to type 'Pass'.
server/payrollEngine/selectPRBUL.ts(163,28): error TS2345: Argument of type 'peria_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/selectProfilCpAnc.ts(230,34): error TS2345: Argument of type 'peria_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/payrollEngine/selectTAUXAT.ts(40,49): error TS2554: Expected 1 arguments, but got 2.
server/payrollEngine/updateCMLInBul.ts(123,27): error TS2345: Argument of type '{ cml_id: number; valeur_en_cours: number; valeur_en_cours_autres_contrats: null; cml_arrondi_calcul: number; }' is not assignable to parameter of type 'CmlInBul'.
  Property 'cml_type_raz_ann' is missing in type '{ cml_id: number; valeur_en_cours: number; valeur_en_cours_autres_contrats: null; cml_arrondi_calcul: number; }' but required in type 'CmlInBul'.
server/portails/employee/checkIfAbsExceedsTgaThreshold.ts(42,32): error TS2531: Object is possibly 'null'.
server/portails/employee/getDatesPresences.ts(45,23): error TS2339: Property 'startDate' does not exist on type '{ id: any; calendarId: number; title: string; }'.
server/portails/employee/getDatesPresences.ts(46,23): error TS2339: Property 'endDate' does not exist on type '{ id: any; calendarId: number; title: string; }'.
server/portails/employee/getDatesPresences.ts(48,23): error TS2339: Property 'allDay' does not exist on type '{ id: any; calendarId: number; title: string; }'.
server/portails/employee/getDatesPresences.ts(49,23): error TS2339: Property 'startDate' does not exist on type '{ id: any; calendarId: number; title: string; }'.
server/portails/employee/getDatesPresences.ts(50,23): error TS2339: Property 'endDate' does not exist on type '{ id: any; calendarId: number; title: string; }'.
server/portails/employee/getDatesPresences.ts(55,27): error TS2345: Argument of type '{ id: any; calendarId: number; title: string; }[]' is not assignable to parameter of type 'Pta[]'.
  Type '{ id: any; calendarId: number; title: string; }' is missing the following properties from type 'Pta': pta_id, pta_heure_arrivee, pta_heure_depart, cnt_id, and 13 more.
server/portails/manager/assistantEmbauche/routerAssistantEmbauche.ts(24,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/portails/manager/assistantEmbauche/routerAssistantEmbauche.ts(27,23): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/portails/manager/assistantEmbauche/routerAssistantEmbauche.ts(27,52): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'DataSalForSearch'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'DataSalForSearch': padId, salNomNaissance, salNomUsage, salPrenom, and 2 more.
server/portails/routerCalendars.ts(53,31): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to parameter of type 'number'.
  Type 'undefined' is not assignable to type 'number'.
server/portails/routerCalendars.ts(78,25): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to parameter of type 'number'.
server/portails/settingsPortalUser.ts(41,15): error TS2322: Type 'Src | null' is not assignable to type 'import("/home/runner/work/payroll-app/payroll-app/server/payrollEngine/declaCalc").Src | null'.
  Type 'Src' is missing the following properties from type 'Src': cnt_id, origin
server/portails/settingsPortalUser.ts(50,13): error TS2322: Type 'number | undefined' is not assignable to type 'number | null'.
  Type 'undefined' is not assignable to type 'number | null'.
server/portails/settingsPortalUser.ts(51,13): error TS2322: Type 'number | null | undefined' is not assignable to type 'number | null'.
server/recurrentTasks/launchBasculesTest/launchBasculesEventTest.ts(2,93): error TS6133: 'PERI_DOSSIER' is declared but its value is never read.
server/recurrentTasks/launchBasculesTest/launchBasculesMensuellesTest.ts(4,57): error TS6133: 'PERI_DOSSIER' is declared but its value is never read.
server/reports/data/absences/getDataAbs.ts(42,27): error TS2345: Argument of type '(err?: Error | null | undefined, rows?: Row[] | undefined) => void' is not assignable to parameter of type '(err?: Error | null | undefined, data?: DataToDisplay<object> | undefined) => void'.
  Types of parameters 'rows' and 'data' are incompatible.
    Type 'DataToDisplay<object> | undefined' is not assignable to type 'Row[] | undefined'.
      Type 'DataToDisplay<object>' is missing the following properties from type 'Row[]': length, pop, push, concat, and 28 more.
server/reports/data/absences/getDataAbsJrtt.ts(72,27): error TS2345: Argument of type '(err?: Error | null | undefined, rows?: Row[] | undefined) => void' is not assignable to parameter of type '(err?: Error | null | undefined, data?: DataToDisplay<object> | undefined) => void'.
  Types of parameters 'rows' and 'data' are incompatible.
    Type 'DataToDisplay<object> | undefined' is not assignable to type 'Row[] | undefined'.
      Type 'DataToDisplay<object>' is missing the following properties from type 'Row[]': length, pop, push, concat, and 28 more.
server/reports/data/absences/getDataAbsJrtt.ts(323,9): error TS2322: Type 'wfl_demande_wdm | never[] | null' is not assignable to type '(wfl_demande_wdm | null)[]'.
  Type 'null' is not assignable to type '(wfl_demande_wdm | null)[]'.
server/reports/data/absences/getDataAbsJrtt.ts(331,49): error TS2339: Property 'abs_datedebut' does not exist on type 'Object'.
server/reports/data/absences/getDataAbsJrtt.ts(332,47): error TS2339: Property 'abs_datefin' does not exist on type 'Object'.
server/reports/data/absences/getDataAbsJrtt.ts(333,53): error TS2339: Property 'abs_datedebut_commence_aprem' does not exist on type 'Object'.
server/reports/data/absences/getDataAbsJrtt.ts(334,50): error TS2339: Property 'abs_datefin_finit_matin' does not exist on type 'Object'.
server/reports/data/absences/getDataAbsJrtt.ts(335,34): error TS2339: Property 'ppla' does not exist on type 'FinalRow'.
server/reports/data/absences/getDataAbsJrtt.ts(336,36): error TS2339: Property 'profilRem' does not exist on type 'FinalRow'.
server/reports/data/absences/getDataAbsJrtt.ts(337,30): error TS2339: Property 'cjf' does not exist on type 'FinalRow'.
server/reports/data/absences/getDataAbsJrtt.ts(338,21): error TS2322: Type '"ouvrés"' is not assignable to type 'TypeMethode'.
server/reports/data/absences/getDataAbsJrtt.ts(339,45): error TS2339: Property 'absenceHeures' does not exist on type 'Object'.
server/reports/data/absences/getDataAbsJrtt.ts(349,34): error TS2339: Property 'tab_desc' does not exist on type 'Object'.
server/reports/data/absences/getDataAbsJrtt.ts(349,53): error TS2339: Property 'tab_lib' does not exist on type 'wfl_demande_wdm'.
server/reports/data/bul/formatBulSimpl.ts(144,59): error TS2339: Property 'isHeaderRem' does not exist on type 'LblSimpl'.
server/reports/data/bul/formatBulSimpl.ts(160,72): error TS2345: Argument of type 'rub_id' is not assignable to parameter of type 'number'.
  Type 'null' is not assignable to type 'number'.
server/reports/data/bul/formatBulSimpl.ts(161,20): error TS2339: Property 'isHeaderIndemNet' does not exist on type 'LblSimpl'.
server/reports/data/bul/formatBulSimpl.ts(227,13): error TS2322: Type 'RegWithLbl | undefined' is not assignable to type 'Freg | null | undefined'.
  Type 'RegWithLbl' is missing the following properties from type 'Freg': regs, freg_lib, freg_num_ordre, freg_display_no_reg
server/reports/data/bul/formatBulSimpl.ts(259,61): error TS2531: Object is possibly 'null'.
server/reports/data/bul/formatBulSimpl.ts(265,11): error TS2322: Type 'reg_operation' is not assignable to type 'TYPE_OPERATION_REGROUPEMENT'.
  Type 'null' is not assignable to type 'TYPE_OPERATION_REGROUPEMENT'.
server/reports/data/bul/formatBulSimpl.ts(340,20): error TS2345: Argument of type 'Freg' is not assignable to parameter of type 'RegWithLbl'.
  Type 'Freg' is missing the following properties from type 'RegWithLbl': lbl, reg_id, reg_lib, reg_num_ordre, and 4 more.
server/reports/data/bul/formatBulSimpl.ts(368,25): error TS2345: Argument of type '{ libFamille: string; isFamilleReg: true; isTotal: false; }' is not assignable to parameter of type 'LblSimpl'.
  Type '{ libFamille: string; isFamilleReg: true; isTotal: false; }' is missing the following properties from type 'LblSimpl': pageNumber, cnt_id, ncnt_id, ncnt_code, and 31 more.
server/reports/data/bul/getDATA_BUL_cleanData.ts(17,11): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/bul/getDATA_BUL_cleanData.ts(18,11): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/bul/getDATA_BUL_cleanData.ts(19,11): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/bul/getDATA_BUL_cleanData.ts(20,11): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/bul/getData_BUL_LBL.ts(183,53): error TS2345: Argument of type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/bul/getData_BUL_LBL").Lbl[]' is not assignable to parameter of type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/getDataMultiBUL").Lbl[]'.
  Type 'Lbl' is missing the following properties from type 'Lbl': cnt_id, ncnt_id, ncnt_code, euti_nom, and 12 more.
server/reports/data/bul/getData_BUL_LBL.ts(184,27): error TS2345: Argument of type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/getDataMultiBUL").Lbl[]' is not assignable to parameter of type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/bul/getData_BUL_LBL").Lbl[]'.
  Property 'rub_type_affich_simpl' is missing in type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/getDataMultiBUL").Lbl' but required in type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/bul/getData_BUL_LBL").Lbl'.
server/reports/data/bul/getData_BUL_PRBUL.ts(24,3): error TS2322: Type '([_client, prbul_id]: [PoolClient, number]) => string | null' is not assignable to type '(args: [client: PoolClient, prbulId: number]) => string'.
  Type 'string | null' is not assignable to type 'string'.
    Type 'null' is not assignable to type 'string'.
server/reports/data/bul/mergeTemplatesZonesBul.ts(2,8): error TS1259: Module '"handlebars"' can only be default-imported using the 'esModuleInterop' flag
server/reports/data/bul/selectRubsNoGrouping.ts(134,24): error TS2488: Type 'FormatLblCompleterZeros' must have a '[Symbol.iterator]()' method that returns an iterator.
server/reports/data/bul/selectRubsNoGrouping.ts(140,24): error TS2488: Type 'FormatLblNbDec' must have a '[Symbol.iterator]()' method that returns an iterator.
server/reports/data/cet/getRowsDataCetInterim.ts(46,13): error TS2339: Property 'diffRecalcul' does not exist on type 'RowDataCetInterim'.
server/reports/data/cet/getRowsDataCetInterim.ts(47,26): error TS2339: Property 'diffRecalcul' does not exist on type 'RowDataCetInterim'.
server/reports/data/cet/getRowsDataCetInterim.ts(48,17): error TS2339: Property 'diffRecalcul' does not exist on type 'RowDataCetInterim'.
server/reports/data/clickHelpers/getStringifiedFunctionOpenCotisUrssafSal.ts(34,9): error TS2322: Type '"html"' is not assignable to type 'REPORT_TYPE_OUTPUT | undefined'.
server/reports/data/compta/formatRowsProvision.ts(21,48): error TS2345: Argument of type 'RegroupCompta | undefined' is not assignable to parameter of type 'RegroupCompta'.
  Type 'undefined' is not assignable to type 'RegroupCompta'.
server/reports/data/compta/formatRowsProvision.ts(25,20): error TS2339: Property 'sal_matricule' does not exist on type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(26,20): error TS2551: Property 'cnt_num' does not exist on type 'LblCompta'. Did you mean 'cpt_num'?
server/reports/data/compta/formatRowsProvision.ts(27,20): error TS2551: Property 'cnt_id' does not exist on type 'LblCompta'. Did you mean 'cpt_id'?
server/reports/data/compta/formatRowsProvision.ts(71,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(81,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(91,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(101,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(113,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(123,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(133,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "C"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/formatRowsProvision.ts(143,14): error TS2345: Argument of type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' is not assignable to parameter of type 'LblCompta'.
  Property 'cpt_id' is missing in type '{ cpt_ventilation_template: string | null; cpt_type: 1 | 2; cpt_num: string; cpt_desc: string; sens: "D"; tal_id: number; color: string; mnt: number; }' but required in type 'LblCompta'.
server/reports/data/compta/getDataRattachCompta.ts(77,62): error TS2339: Property 'color' does not exist on type 'LblCompta'.
server/reports/data/compta/getProvisionsForOd.ts(66,20): error TS2769: No overload matches this call.
  Overload 1 of 3, '(tasks: AsyncFunction<unknown, Error>[], callback?: AsyncResultArrayCallback<unknown, Error> | undefined): void', gave the following error.
    Argument of type 'Function[]' is not assignable to parameter of type 'AsyncFunction<unknown, Error>[]'.
      Type 'Function' is not assignable to type 'AsyncFunction<unknown, Error>'.
        Type 'Function' provides no match for the signature '(callback: (err?: Error | null | undefined, result?: unknown) => void): void'.
  Overload 2 of 3, '(tasks: Dictionary<AsyncFunction<unknown, Error>>, callback?: AsyncResultObjectCallback<unknown, Error> | undefined): void', gave the following error.
    Argument of type 'Function[]' is not assignable to parameter of type 'Dictionary<AsyncFunction<unknown, Error>>'.
      Index signature is missing in type 'Function[]'.
server/reports/data/compta/getProvisionsForOd.ts(71,34): error TS2488: Type 'unknown' must have a '[Symbol.iterator]()' method that returns an iterator.
server/reports/data/compta/getProvisionsForOd.ts(122,27): error TS2345: Argument of type 'LblCompta[]' is not assignable to parameter of type 'Row[]'.
  Type 'LblCompta' is missing the following properties from type 'Row': cnt_id, bul_est_stc, sal_desc, cnt_desc, and 8 more.
server/reports/data/compta/provCet/formatRows.ts(52,9): error TS2551: Property 'brut_maintien_m' does not exist on type 'Row'. Did you mean 'brut_maintien'?
server/reports/data/compta/provCet/formatRows.ts(53,9): error TS2339: Property 'taux_maintien_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(54,9): error TS2551: Property 'solde_m' does not exist on type 'Row'. Did you mean 'solde'?
server/reports/data/compta/provCet/formatRows.ts(55,9): error TS2339: Property 'prov_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(56,9): error TS2339: Property 'charges_prov_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(61,9): error TS2339: Property 'brut_maintien_m1' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(62,9): error TS2339: Property 'taux_maintien_m1' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(63,9): error TS2339: Property 'solde_m1' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(64,9): error TS2339: Property 'prov_m1' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(65,9): error TS2339: Property 'charges_prov_m1' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(70,9): error TS2551: Property 'brut_maintien_m' does not exist on type 'Row'. Did you mean 'brut_maintien'?
server/reports/data/compta/provCet/formatRows.ts(71,9): error TS2339: Property 'taux_maintien_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(72,9): error TS2551: Property 'solde_m' does not exist on type 'Row'. Did you mean 'solde'?
server/reports/data/compta/provCet/formatRows.ts(73,13): error TS2339: Property 'bul_est_stc' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(74,13): error TS2551: Property 'solde_m' does not exist on type 'Row'. Did you mean 'solde'?
server/reports/data/compta/provCet/formatRows.ts(76,9): error TS2339: Property 'prov_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(76,31): error TS2551: Property 'solde_m' does not exist on type 'Row'. Did you mean 'solde'?
server/reports/data/compta/provCet/formatRows.ts(76,45): error TS2339: Property 'taux_maintien_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(77,9): error TS2339: Property 'charges_prov_m' does not exist on type 'Row'.
server/reports/data/compta/provCet/formatRows.ts(77,39): error TS2339: Property 'prov_m' does not exist on type 'Row'.
server/reports/data/compta/provCp/getDataProvCp.ts(125,5): error TS2322: Type 'RowDataProvCp[]' is not assignable to type 'Row[]'.
  Type 'RowDataProvCp' is missing the following properties from type 'Row': bul_est_stc_m1, brut_maintien_m1, pris_n_m1, pris_n1_m1, and 25 more.
server/reports/data/compta/provCp/getDataProvCp.ts(126,5): error TS2322: Type 'RowDataProvCp[]' is not assignable to type 'Row[]'.
server/reports/data/compta/provIfcdd/getRows.ts(78,28): error TS2339: Property 'sal_id' does not exist on type 'Row'.
server/reports/data/compta/provIfcdd/getRows.ts(79,28): error TS2339: Property 'pad_id' does not exist on type 'Row'.
server/reports/data/controles/getDataControleDatesBulletins.ts(105,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/controles/getDataControleOverlapCnts.ts(59,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/controles/getDataControleVva.ts(71,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/controles/getDataErreurRelevesHeures.ts(51,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/cotis/getDataCOTIS.ts(146,13): error TS2322: Type '"org_desc"' is not assignable to type '"emp_desc" | "sal_desc" | "date_debut" | "uorg_desc" | "aff_lib" | "cpt_numero" | "compte_analytique" | "affil_desc"'.
server/reports/data/cotis/getDataCOTIS.ts(147,13): error TS2322: Type '""' is not assignable to type '"Salarié" | "Emploi" | "Affectation" | "Affaire" | "Date d'entrée" | "Numéro de compte" | "Imputation analytique" | "Affiliation"'.
server/reports/data/cotis/getDataCOTIS.ts(168,60): error TS2345: Argument of type 'Criteria' is not assignable to parameter of type 'ReportCriteria'.
  Property 'name' is missing in type 'Criteria' but required in type 'ReportCriteria'.
server/reports/data/cotis/getDataCOTIS.ts(170,54): error TS2345: Argument of type 'Criteria' is not assignable to parameter of type 'ReportCriteria'.
server/reports/data/cotis/getDataRemEligCice.ts(42,12): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/cotis/getDataRemEligCice.ts(43,12): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/dsn/getAggDsnBlocks.ts(1,22): error TS2307: Cannot find module '../../../dsn/decla_dsn' or its corresponding type declarations.
server/reports/data/dsn/getDataDsnBasesAssujetties.ts(52,25): error TS2322: Type 'Line[]' is not assignable to type 'Row[]'.
  Type 'Line' is not assignable to type 'Row'.
    Index signature is missing in type 'Line'.
server/reports/data/dsn/getDataDsnCotisIndiv.ts(101,61): error TS2345: Argument of type '{ criteria: CriteriaUrssaf; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'CriteriaUrssaf' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/dsn/getDataDsnPas.ts(66,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/dsn/getDataDsnPas.ts(171,15): error TS2740: Type '{ salNom: string; salPrenom: string; salMatricule: string; }' is missing the following properties from type 'DataRow': sal_id, netAPayer, mntPas, netFiscal, and 6 more.
server/reports/data/dsn/getDataDsnPrev.ts(65,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/dsn/getDataDsnPrev.ts(502,9): error TS2322: Type 'LineByContrat | undefined' is not assignable to type 'LineByContrat'.
  Type 'undefined' is not assignable to type 'LineByContrat'.
server/reports/data/dsn/getDataDsnPrev.ts(652,159): error TS2531: Object is possibly 'null'.
server/reports/data/dsn/getDataDsnPrev.ts(663,28): error TS2345: Argument of type '{ idAffil: string; salId: number; cntId: number; codeOption?: string | undefined; codePopulation?: string | undefined; idAdhesion: string; prevDesc: string; cprevsDesc: string; affilDesc: string; ta_prev?: number | null | undefined; tb_t2_prev?: number | null | undefined; tc_prev?: number | null | undefined; td_prev?: number | null | undefined; base_forf_prev?: number | null | undefined; base_specif_prev_17?: number | null | undefined; mnt_forf_prev?: number | null | undefined; mnt_libre_prev?: number | null | undefined; total_cotis: number | null; has_78_prev: boolean; has_79_prev: boolean; has_81_prev: boolean; rubsDesc: string; sal_id: number; cnt_id: number; salMatricule: string; salNom: string; salPrenom: string; cntDesc: string; statutRc: string; }' is not assignable to parameter of type 'FinalRow'.
  Types of property 'codeOption' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
server/reports/data/dsn/getDataDsnRc.ts(52,43): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Type 'Criteria' is missing the following properties from type 'Omit<ReportCriteria, "name" | "outputType">': peri_debut, peri_fin
server/reports/data/dsn/getDataDsnRc.ts(200,5): error TS2322: Type 'import("/home/runner/work/payroll-app/payroll-app/server/reports/data/shared/shared").DataRow[]' is not assignable to type 'DataRow[]'.
  Type 'DataRow' is missing the following properties from type 'DataRow': sal_id, salMatricule, salNom, salPrenom, and 9 more.
server/reports/data/dsn/rc/transform.ts(176,13): error TS2322: Type '{ brut: number; ta: number; reduction: number | null; baseExoApprenti: number | null; cot_avant_reduction: number | null; cot: number | null; brutSpecif: number | null; taSpecif: number | null; baseExcep: number | null; sal_id: number; salNom: string; salPrenom: string; salMatricule: string; cntDesc: string; statutRc: string; codeRetraite: string; periodeDesc: string; }' is not assignable to type 'DataRow'.
  Object literal may only specify known properties, and 'sal_id' does not exist in type 'DataRow'.
server/reports/data/getAllDataBuls.ts(31,13): error TS2345: Argument of type 'Bul[] | BulAgg[]' is not assignable to parameter of type 'IterableCollection<DataBul>'.
  Type 'Bul[]' is not assignable to type 'IterableCollection<DataBul>'.
    Type 'Bul[]' is not assignable to type 'DataBul[]'.
      Type 'Bul' is missing the following properties from type 'DataBul': pageNumber, entete, dateDebutCalendar, dateFinCalendar, and 17 more.
server/reports/data/getAllDataBuls.ts(33,89): error TS2345: Argument of type 'AsyncResultCallback<DataBul, Error>' is not assignable to parameter of type '(err: Error, dataBuls: DataBul[]) => void'.
  Types of parameters 'result' and 'dataBuls' are incompatible.
    Type 'DataBul[]' is missing the following properties from type 'DataBul': pageNumber, entete, dateDebutCalendar, dateFinCalendar, and 17 more.
server/reports/data/getDataBUL.ts(97,12): error TS2345: Argument of type '(err: Error, cnt: Cnt, ccn: Ccn, posconv: any) => void' is not assignable to parameter of type 'AsyncResultCallback<Cnt, Error>'.
server/reports/data/getDataBUL.ts(180,23): error TS2339: Property 'cumulsBulsCntsAnterieursAnneeDecalage' does not exist on type '{ entete: (cb: AsyncCallback) => void; comment: (cb: AsyncCallback) => void; lbl: (cb: AsyncCallback) => void; orgss: (cb: AsyncCallback) => void; cumulsBul: (cb: AsyncCallback) => void; absPeri: (cb: AsyncCallback) => void; vvaPeri: (cb: AsyncCallback) => void; prbul: (cb: AsyncCallback) => void; ppla: (cb: AsyncCallback) => void; pare: (cb: AsyncCallback) => void; prtt: (cb: AsyncCallback) => void; pacp: (cb: AsyncCallback) => void; profilCpAnc: (cb: AsyncCallback) => void; cumulsBulsCntsAnterieurs: (cb: AsyncCallback) => void; }'.
server/reports/data/getDataBUL.ts(221,29): error TS2339: Property 'paas' does not exist on type 'TasksResults'.
server/reports/data/getDataBUL.ts(274,174): error TS2339: Property 'paas' does not exist on type 'TasksResults'.
server/reports/data/getDataBUL.ts(274,189): error TS2339: Property 'paas' does not exist on type 'TasksResults'.
server/reports/data/getDataBUL.ts(278,25): error TS2322: Type '{ prbul_display_calendar: boolean; cumuls: { titre: string; rang: number; cml_code: string; cml_lib: string; }[]; }' is not assignable to type 'Prbul'.
server/reports/data/getDataBUL.ts(326,25): error TS2322: Type '{ shouldDisplayNbHeuresEffectuees: boolean; estForfaitJours?: boolean | undefined; estForfaitHeuresAnnuel?: boolean | undefined; estAnnualisationModulation?: boolean | undefined; forfaitAnnee: number; horaireHebdo?: number | null | undefined; enHeures: boolean; bul_id: number; pad_id: number; cnt_id: number; eta_id: number; semp_id: number; ncnt_id: number; cnt_a_quot_trav_specifique: boolean; cnt_quot_trav: Schema.pay_contrat_cntFields.cnt_quot_trav; cnt_debut_date: Date; cnt_fin_date: Schema.pay_contrat_cntFields.cnt_fin_date; cnt_datefin_prevue: Schema.pay_contrat_cntFields.cnt_datefin_prevue; sal_desc: string; peri_anneemois: number; pare_id: number; peria_id: Schema.pay_paramprofprem_pareFields.peria_id; prem_id: Schema.pay_paramprofprem_pareFields.prem_id; acrd_id: number; pare_quot_coll_ref: Schema.pay_paramprofprem_pareFields.pare_quot_coll_ref; pare_quot_journ_coll_ref: Schema.pay_paramprofprem_pareFields.pare_quot_journ_coll_ref; pare_quot_periode: Schema.pay_paramprofprem_pareFields.pare_quot_periode; trem_id: number; pare_type_peri: number; pare_fj_methode_prorata: number; pare_fj_affich_rub_inform: boolean; pare_fj_type_debut_periode: number; pare_fj_rub_inform_template: Schema.pay_paramprofprem_pareFields.pare_fj_rub_inform_template; pare_fj_cpt_acquis_type: number; pare_fj_cpt_pris_type: number; pare_fj_cpt_restant_type: number; pare_fj_prorata_neutr_cp: boolean; pare_fj_type_affich_cpt_nm1: number; pare_type_auto: number; pare_temp_quot_coll_est_temps_travaille: boolean; pare_type_calcul_abs_es: number; pare_fj_affich_nbj_trav: boolean; pare_type_lissage: number; pare_lissage_nb_mois: Schema.pay_paramprofprem_pareFields.pare_lissage_nb_mois; pare_lissage_cml_id: Schema.pay_paramprofprem_pareFields.pare_lissage_cml_id; pare_smc_pct_fixe: Schema.pay_paramprofprem_pareFields.pare_smc_pct_fixe; pare_smc_pct_avec_variable: Schema.pay_paramprofprem_pareFields.pare_smc_pct_avec_variable; pare_fj_type_affich_cpt_n: number; pare_ann_type_calcul_hor_mens: number; }' is not assignable to type 'PareResult'.
  Object literal may only specify known properties, and 'shouldDisplayNbHeuresEffectuees' does not exist in type 'PareResult'.
server/reports/data/getDataBUL.ts(339,39): error TS2339: Property 'paas' does not exist on type 'TasksResults'.
server/reports/data/getDataBUL.ts(343,25): error TS2322: Type '{ customClsCalendar: string; dateDebutCalendar: Date; dateFinCalendar: Date; entete: Entete; comment: string; lbl: any; orgss: any; ccn: Ccn; posconv: any; paas: any; pare: PareResult; pacp: any; prtt: any; profilCpAnc: ProfilCpAnc; afficherCompteursCpRtt: boolean; afficherCompteurRcJours: any; afficherCompteurRcHeures: boolean; prbul: Prbul; calendrier_dates: CalendarDate[]; cumuls: {}; cumuls_tous_contrats: {}; shouldDisplayClassif: boolean; }' is not assignable to type 'DataBul'.
  Object literal may only specify known properties, and 'profilCpAnc' does not exist in type 'DataBul'.
server/reports/data/getDataBUL.ts(355,21): error TS2322: Type 'CPRN' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBUL.ts(356,21): error TS2322: Type 'CPRN' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBUL.ts(357,21): error TS2322: Type 'CPRN' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBUL.ts(358,21): error TS2322: Type 'number | null' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
  Type 'null' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBUL.ts(370,44): error TS2339: Property 'val_bul' does not exist on type '{ titre: string; rang: number; cml_code: string; cml_lib: string; cml_arrondi_calcul: number; }'.
server/reports/data/getDataBUL.ts(371,44): error TS2339: Property 'val_annuelle' does not exist on type '{ titre: string; rang: number; cml_code: string; cml_lib: string; cml_arrondi_calcul: number; }'.
server/reports/data/getDataBULAgg.ts(148,5): error TS2345: Argument of type '(err: Error, firstCnt: Cnt, ccn: any, posconv: any) => void' is not assignable to parameter of type 'AsyncResultCallback<Cnt, Error>'.
server/reports/data/getDataBULAgg.ts(216,15): error TS2339: Property 'includeVva' does not exist on type 'OptionsLbl'.
server/reports/data/getDataBULAgg.ts(227,23): error TS2769: No overload matches this call.
  Overload 1 of 3, '(tasks: AsyncFunction<Tasks, Error>[], callback?: AsyncResultArrayCallback<Tasks, Error> | undefined): void', gave the following error.
    Argument of type 'Tasks' is not assignable to parameter of type 'AsyncFunction<Tasks, Error>[]'.
      Type 'Tasks' is missing the following properties from type 'AsyncFunction<Tasks, Error>[]': length, pop, push, concat, and 28 more.
  Overload 2 of 3, '(tasks: Dictionary<AsyncFunction<Tasks, Error>>, callback?: AsyncResultObjectCallback<Tasks, Error> | undefined): void', gave the following error.
    Argument of type 'Tasks' is not assignable to parameter of type 'Dictionary<AsyncFunction<Tasks, Error>>'.
      Index signature is missing in type 'Tasks'.
server/reports/data/getDataBULAgg.ts(297,158): error TS2339: Property 'paas' does not exist on type 'TasksResults'.
server/reports/data/getDataBULAgg.ts(297,173): error TS2339: Property 'paas' does not exist on type 'TasksResults'.
server/reports/data/getDataBULAgg.ts(307,6): error TS2740: Type '{ prbul_display_calendar: boolean; cumuls: { titre: string; rang: number; cml_code: string; cml_lib: string; }[]; }' is missing the following properties from type 'Prbul': prbul_id, peria_id, acrd_id, prbul_agreggated, and 12 more.
server/reports/data/getDataBULAgg.ts(319,78): error TS2551: Property 'ncnt_id' does not exist on type 'Cnt'. Did you mean 'cnt_id'?
server/reports/data/getDataBULAgg.ts(333,6): error TS2322: Type '(Lbl | LblHeader)[]' is not assignable to type 'Lbl[]'.
  Type 'Lbl | LblHeader' is not assignable to type 'Lbl'.
    Type 'LblHeader' is missing the following properties from type 'Lbl': pageNumber, cnt_id, ncnt_id, ncnt_code, and 30 more.
server/reports/data/getDataBULAgg.ts(351,5): error TS2741: Property 'val_bul' is missing in type 'CPRN' but required in type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBULAgg.ts(352,5): error TS2322: Type 'CPRN' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBULAgg.ts(353,5): error TS2322: Type 'CPRN' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBULAgg.ts(354,5): error TS2322: Type 'number | null' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
  Type 'null' is not assignable to type '{ val_bul: number; val_annuelle: number; }'.
server/reports/data/getDataBULAgg.ts(358,22): error TS2339: Property 'val_bul' does not exist on type '{ titre: string; rang: number; cml_code: string; cml_lib: string; cml_arrondi_calcul: number; }'.
server/reports/data/getDataBULAgg.ts(359,22): error TS2339: Property 'val_annuelle' does not exist on type '{ titre: string; rang: number; cml_code: string; cml_lib: string; cml_arrondi_calcul: number; }'.
server/reports/data/getDataBULAgg.ts(364,17): error TS2339: Property 'includeVva' does not exist on type 'OptionsLbl'.
server/reports/data/getDataCertificatTravail.ts(439,23): error TS2345: Argument of type '{ ect_datedebut: Date; ect_datefin: ect_datefin; emp_desc: string; cnt_fin_date: cnt_fin_date; }' is not assignable to parameter of type '{ emp_desc: string; ect_datedebut: string; cnt_fin_date: string; ect_datefin: string; }'.
  Types of property 'ect_datedebut' are incompatible.
    Type 'Date' is not assignable to type 'string'.
server/reports/data/getDataCnt.ts(402,8): error TS2741: Property 'catc_id' is missing in type '{ rcdd_id: any; pad_id: number; ncnt_id: any; semp_id: any; eta_id: any; src_id: number; dpub_id: any; euti_id: any; trem_id: any; cnt_id: any; }' but required in type 'SelectionPeriaDataCnt'.
server/reports/data/getDataCotisUrssaf.ts(56,18): error TS2339: Property 'listeDeRupture' does not exist on type 'CriteriaCotisUrssaf'.
server/reports/data/getDataCotisUrssaf.ts(57,18): error TS2339: Property 'listeDeRupture' does not exist on type 'CriteriaCotisUrssaf'.
server/reports/data/getDataCotisUrssaf.ts(69,64): error TS2339: Property 'listeDeRupture' does not exist on type 'CriteriaCotisUrssaf'.
server/reports/data/getDataCotisUrssaf.ts(115,9): error TS2322: Type 'DataToDisplay<RowCotisUrssaf>' is not assignable to type 'DataToDisplay<T>'.
  Type 'RowCotisUrssaf' is not assignable to type 'T'.
    'T' could be instantiated with an arbitrary type which could be unrelated to 'RowCotisUrssaf'.
server/reports/data/getDataDsnCotisAgreg.ts(131,64): error TS2339: Property 'eta_desc' does not exist on type 'Brc'.
server/reports/data/getDataDsnCotisAgreg.ts(210,94): error TS2345: Argument of type '{ code: dsnl_code; value: string; dsnd_id: number; dsnl_id: number; eta_id: eta_id; sal_id: sal_id; cnt_id: cnt_id; dsnl_code: dsnl_code; dsnl_value: dsnl_value; afod_id: afod_id; pops_id: pops_id; dsnl_error: dsnl_error; dsnl_warning: dsnl_warning; prev_id: prev_id; cprev_ids: cprev_ids; }[]' is not assignable to parameter of type 'Line[]'.
  Type '{ code: Schema.pay_dsnline_dsnlFields.dsnl_code; value: string; dsnd_id: number; dsnl_id: number; eta_id: Schema.pay_dsnline_dsnlFields.eta_id; sal_id: Schema.pay_dsnline_dsnlFields.sal_id; cnt_id: Schema.pay_dsnline_dsnlFields.cnt_id; dsnl_code: Schema.pay_dsnline_dsnlFields.dsnl_code; dsnl_value: Schema.pay_dsnline_dsnlFields.dsnl_value; afod_id: Schema.pay_dsnline_dsnlFields.afod_id; pops_id: Schema.pay_dsnline_dsnlFields.pops_id; dsnl_error: Schema.pay_dsnline_dsnlFields.dsnl_error; dsnl_warning: Schema.pay_dsnline_dsnlFields.dsnl_warning; prev_id: Schema.pay_dsnline_dsnlFields.prev_id; cprev_ids: Schema.pay_dsnline_dsnlFields.cprev_ids; }' is not assignable to type 'Line'.
    Types of property 'code' are incompatible.
      Type 'dsnl_code' is not assignable to type 'string'.
        Type 'null' is not assignable to type 'string'.
server/reports/data/getDataDsnCotisAgreg.ts(211,55): error TS2339: Property 'value' does not exist on type 'Line'.
server/reports/data/getDataDsnCotisAgreg.ts(212,34): error TS2339: Property 'value' does not exist on type 'Line'.
server/reports/data/getDataDsnCotisAgreg.ts(219,98): error TS2345: Argument of type '{ code: dsnl_code; value: string; dsnd_id: number; dsnl_id: number; eta_id: eta_id; sal_id: sal_id; cnt_id: cnt_id; dsnl_code: dsnl_code; dsnl_value: dsnl_value; afod_id: afod_id; pops_id: pops_id; dsnl_error: dsnl_error; dsnl_warning: dsnl_warning; prev_id: prev_id; cprev_ids: cprev_ids; }[]' is not assignable to parameter of type 'Line[]'.
server/reports/data/getDataEmargement.ts(1,32): error TS2614: Module '"../../api/variables/services/getContratsToDisplay"' has no exported member 'User'. Did you mean to use 'import User from "../../api/variables/services/getContratsToDisplay"' instead?
server/reports/data/getDataEmargement.ts(89,9): error TS2322: Type '{ sal_desc: string; cnt_desc: string; affs_desc: string; uorg_desc: string; emp_desc: string; cnt_debut_date: Date; signature: string; heureDebutDesc: jtrav_heure_debut; heureFinDesc: jtrav_heure_fin; repasDesc: string | null; }[]' is not assignable to type 'Row[]'.
  Type '{ sal_desc: string; cnt_desc: string; affs_desc: string; uorg_desc: string; emp_desc: string; cnt_debut_date: Date; signature: string; heureDebutDesc: gta_jourtrav_jtravFields.jtrav_heure_debut; heureFinDesc: gta_jourtrav_jtravFields.jtrav_heure_fin; repasDesc: string | null; }' is not assignable to type 'Row'.
    Types of property 'heureDebutDesc' are incompatible.
      Type 'jtrav_heure_debut' is not assignable to type 'string'.
        Type 'null' is not assignable to type 'string'.
server/reports/data/getDataMultiBUL.ts(140,193): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/data/getDataMultiBUL.ts(145,39): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/data/getDataMultiBUL.ts(223,70): error TS2345: Argument of type '((client: PoolClient, criteria: ReportBulsCriteria, options: OptionsReportBul, memoizedGetters: MemoizedGetters, bul: Bul, externalCallback: (err?: Error | null | undefined, databul?: DataBul | undefined) => void) => void) | ((client: PoolClient, criteria: ReportBulsCriteria, optionsBuls: OptionsReportBul, memoizedGetters: MemoizedGetters, bulAgg: BulAgg, externalCallback: (err?: Error | null | undefined, databul?: DataBul | undefined) => void) => void)' is not assignable to parameter of type 'FnGetDataBuls'.
  Type '(client: PoolClient, criteria: ReportBulsCriteria, options: OptionsReportBul, memoizedGetters: MemoizedGetters, bul: Bul, externalCallback: (err?: Error | null | undefined, databul?: DataBul | undefined) => void) => void' is not assignable to type 'FnGetDataBuls'.
    Types of parameters 'externalCallback' and 'cb' are incompatible.
      Types of parameters 'err' and 'err' are incompatible.
        Type 'Error | null | undefined' is not assignable to type 'Error'.
          Type 'undefined' is not assignable to type 'Error'.
server/reports/data/getDataMultiBUL.ts(247,8): error TS2345: Argument of type '(err: any, databuls: any, nbBuls: number) => void' is not assignable to parameter of type 'AsyncResultCallback<DataBul[], Error | null>'.
server/reports/data/getDataMultiBUL.ts(291,34): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/data/getDataOD.ts(128,21): error TS2339: Property 'rubs' does not exist on type 'LblCompta'.
server/reports/data/getDataOD.ts(189,15): error TS2322: Type 'RowToDispatch[]' is not assignable to type 'LblCompta[]'.
  Type 'RowToDispatch' is missing the following properties from type 'LblCompta': sens, cpt_id, cpt_type, tal_id, and 3 more.
server/reports/data/getDataOD.ts(189,59): error TS2345: Argument of type 'LblCompta' is not assignable to parameter of type 'RowToDispatch'.
  Type 'LblCompta' is missing the following properties from type 'RowToDispatch': cnt_num, sal_matricule, sal_nom_usage, sal_nom_famille, and 2 more.
server/reports/data/getDataOD.ts(190,18): error TS2339: Property 'cpt_desc' does not exist on type 'RowToDispatch'.
server/reports/data/getDataOD.ts(190,55): error TS2339: Property 'cpt_lib' does not exist on type 'RowToDispatch'.
server/reports/data/getDataOD.ts(193,27): error TS2769: No overload matches this call.
  Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
    Argument of type 'LblCompta[]' is not assignable to parameter of type 'ConcatArray<never>'.
      The types returned by 'slice(...)' are incompatible between these types.
        Type 'LblCompta[]' is not assignable to type 'never[]'.
          Type 'LblCompta' is not assignable to type 'never'.
  Overload 2 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
    Argument of type 'LblCompta[]' is not assignable to parameter of type 'ConcatArray<never>'.
server/reports/data/getDataOD.ts(197,15): error TS2322: Type 'RowToDispatch[]' is not assignable to type 'LblCompta[]'.
server/reports/data/getDataOD.ts(197,59): error TS2345: Argument of type 'LblCompta' is not assignable to parameter of type 'RowToDispatch'.
server/reports/data/getDataOD.ts(198,18): error TS2339: Property 'cpt_desc' does not exist on type 'RowToDispatch'.
server/reports/data/getDataOD.ts(198,55): error TS2339: Property 'cpt_lib' does not exist on type 'RowToDispatch'.
server/reports/data/getDataOD.ts(201,27): error TS2769: No overload matches this call.
  Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
    Argument of type 'LblCompta[]' is not assignable to parameter of type 'ConcatArray<never>'.
  Overload 2 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
    Argument of type 'LblCompta[]' is not assignable to parameter of type 'ConcatArray<never>'.
server/reports/data/getDataOD.ts(288,15): error TS2345: Argument of type '{ color: string; cpt_desc: string; debit: number; credit: number; }' is not assignable to parameter of type '{ cpt_id: number; cpt_desc: string; color: string; debit?: number | undefined; credit?: number | undefined; }'.
  Property 'cpt_id' is missing in type '{ color: string; cpt_desc: string; debit: number; credit: number; }' but required in type '{ cpt_id: number; cpt_desc: string; color: string; debit?: number | undefined; credit?: number | undefined; }'.
server/reports/data/getDataOD.ts(307,19): error TS2345: Argument of type '{ color: string; cpt_desc: string; debit: number; credit: string; }' is not assignable to parameter of type '{ cpt_id: number; cpt_desc: string; color: string; debit?: number | undefined; credit?: number | undefined; }'.
  Property 'cpt_id' is missing in type '{ color: string; cpt_desc: string; debit: number; credit: string; }' but required in type '{ cpt_id: number; cpt_desc: string; color: string; debit?: number | undefined; credit?: number | undefined; }'.
server/reports/data/getDataOD.ts(325,19): error TS2345: Argument of type '{ color: string; cpt_desc: string; debit: number; credit: number; }' is not assignable to parameter of type '{ cpt_id: number; cpt_desc: string; color: string; debit?: number | undefined; credit?: number | undefined; }'.
  Property 'cpt_id' is missing in type '{ color: string; cpt_desc: string; debit: number; credit: number; }' but required in type '{ cpt_id: number; cpt_desc: string; color: string; debit?: number | undefined; credit?: number | undefined; }'.
server/reports/data/getDataPas.ts(82,22): error TS2339: Property 'id_crm' does not exist on type 'LineDataPas'.
server/reports/data/getDataPas.ts(106,60): error TS2339: Property 'id_crm' does not exist on type 'LineDataPas'.
server/reports/data/getDataSaisies.ts(33,19): error TS2345: Argument of type '{ criteria: Criteria; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  The types of 'criteria.uorg_id' are incompatible between these types.
    Type 'number[] | null' is not assignable to type 'number[] | undefined'.
      Type 'null' is not assignable to type 'number[] | undefined'.
server/reports/data/getDataSaisies.ts(166,12): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/data/getDataSaisies.ts(167,44): error TS2345: Argument of type 'Criteria' is not assignable to parameter of type 'CriteriaForWhere'.
  Types of property 'uorg_id' are incompatible.
    Type 'number[] | null' is not assignable to type 'number[] | undefined'.
server/reports/data/getDataShared.ts(52,65): error TS2345: Argument of type 'Omit<ReportCriteria, "name" | "outputType">' is not assignable to parameter of type 'ReportCriteria'.
  Type 'Omit<ReportCriteria, "name" | "outputType">' is missing the following properties from type 'ReportCriteria': name, outputType
server/reports/data/getDataShared.ts(75,5): error TS2322: Type 'TemplateHeader[]' is not assignable to type 'HeaderToDisplay[]'.
  Property 'stopGroupColSpan' is missing in type 'TemplateHeader' but required in type 'HeaderToDisplay'.
server/reports/data/getDataShared.ts(78,40): error TS2339: Property 'outputType' does not exist on type 'Omit<ReportCriteria, "name" | "outputType">'.
server/reports/data/getDataShared.ts(94,42): error TS2339: Property 'cumul' does not exist on type 'TemplateConfig'.
server/reports/data/getDataShared.ts(94,136): error TS2339: Property 'cumul' does not exist on type 'TemplateConfig'.
server/reports/data/getDataShared.ts(109,21): error TS2345: Argument of type 'DataToDisplay<object> | undefined' is not assignable to parameter of type 'DataToDisplay<DataRow> | PromiseLike<DataToDisplay<DataRow>>'.
  Type 'undefined' is not assignable to type 'DataToDisplay<DataRow> | PromiseLike<DataToDisplay<DataRow>>'.
server/reports/data/paiements/getDataNetsNegatifs.ts(50,43): error TS2345: Argument of type '{ criteria: CriteriaDataNetsNegatifs; templateConfig: TemplateConfig; }' is not assignable to parameter of type 'DataConfig'.
  Types of property 'criteria' are incompatible.
    Property 'peri_fin' is missing in type 'CriteriaDataNetsNegatifs' but required in type 'Omit<ReportCriteria, "name" | "outputType">'.
server/reports/data/shared/getSignataireContrat.ts(94,9): error TS2741: Property 'titreCivilite' is missing in type '{ rsp_id: null; nom: null; prenom: null; isExterne: null; email: null; niveau: null; qualite: null; doc_id_signature: null; urlSignature: null; pdos_domain_name: null; }' but required in type 'Signataire'.
server/reports/data/shared/groupOnColNo.ts(39,62): error TS2345: Argument of type 'number | null' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.
server/reports/data/shared/groupOnColNo.ts(82,64): error TS2345: Argument of type 'Col' is not assignable to parameter of type 'GroupCol'.
  Type 'Col' is missing the following properties from type 'GroupCol': total, count
server/reports/data/shared/groupOnColNo.ts(87,19): error TS2339: Property 'alert' does not exist on type 'LineToDisplay<DataRow>'.
server/reports/data/shared/groupOnColNo.ts(87,33): error TS2339: Property 'alert' does not exist on type 'LineToDisplay<DataRow>'.
server/reports/data/shared/groupOnColNo.ts(87,47): error TS2339: Property 'alert' does not exist on type 'LineToDisplay<DataRow>'.
server/reports/data/shared/groupOnColNo.ts(88,19): error TS2339: Property 'class' does not exist on type 'LineToDisplay<DataRow>'.
server/reports/data/shared/groupOnColNo.ts(89,19): error TS2339: Property 'style' does not exist on type 'LineToDisplay<DataRow>'.
server/reports/data/shared/groupOnColNo.ts(90,13): error TS2322: Type 'string | true' is not assignable to type 'boolean'.
  Type 'string' is not assignable to type 'boolean'.
server/reports/data/shared/groupOnColNo.ts(95,38): error TS2339: Property 'alert' does not exist on type 'LineToDisplay<DataRow>'.
server/reports/data/shared/groupOnColNo.ts(102,22): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/reports/data/shared/groupOnColNo.ts(103,19): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/reports/data/shared/groupOnColNo.ts(104,28): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/reports/data/shared/groupOnColNo.ts(110,23): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
server/reports/dataReportsMgr.ts(82,121): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/dataReportsMgr.ts(89,34): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/dataReportsMgr.ts(147,34): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/dataReportsMgr.ts(186,40): error TS2339: Property 'currentPdosId' does not exist on type 'ReportUser'.
server/reports/dataReportsMgr.ts(187,41): error TS2339: Property 'currentPdosId' does not exist on type 'ReportUser'.
server/reports/dataReportsMgr.ts(188,42): error TS2339: Property 'currentPdosId' does not exist on type 'ReportUser'.
server/reports/dataReportsMgr.ts(308,61): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'Criteria'.
  Types of property 'uorg_id' are incompatible.
    Type 'number[] | undefined' is not assignable to type 'number[] | null'.
      Type 'undefined' is not assignable to type 'number[] | null'.
server/reports/dataReportsMgr.ts(356,58): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'Criteria'.
  Property 'displayDetailDemandes' is missing in type 'ReportCriteria' but required in type 'Criteria'.
server/reports/dataReportsMgr.ts(364,56): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'CriteriaOD'.
  Types of property 'uorg_id' are incompatible.
    Type 'number[] | undefined' is not assignable to type 'number[]'.
      Type 'undefined' is not assignable to type 'number[]'.
server/reports/dataReportsMgr.ts(418,57): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'Criteria'.
  Type 'ReportCriteria' is missing the following properties from type 'Criteria': displayCumulMensuel, displayCumulAnnuel, displayCumulContrat, groupBySal
server/reports/dataReportsMgr.ts(445,64): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'EtatPrepCriteria'.
  Property 'bul_id' is missing in type 'ReportCriteria' but required in type 'EtatPrepCriteria'.
server/reports/dataReportsMgr.ts(474,75): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'Criteria'.
  Types of property 'dsnd_id' are incompatible.
    Type 'number | undefined' is not assignable to type 'number'.
      Type 'undefined' is not assignable to type 'number'.
server/reports/dataReportsMgr.ts(480,13): error TS2322: Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter | DataGetterAsync | null'.
  Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter'.
    Types of parameters 'criteria' and 'criteria' are incompatible.
      Type 'ReportCriteria' is not assignable to type 'Criteria'.
        Types of property 'dsnd_id' are incompatible.
          Type 'number | undefined' is not assignable to type 'number'.
            Type 'undefined' is not assignable to type 'number'.
server/reports/dataReportsMgr.ts(486,13): error TS2322: Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter | DataGetterAsync | null'.
  Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter'.
    Types of parameters 'criteria' and 'criteria' are incompatible.
      Type 'ReportCriteria' is not assignable to type 'Criteria'.
        Types of property 'dsnd_id' are incompatible.
          Type 'number | undefined' is not assignable to type 'number'.
            Type 'undefined' is not assignable to type 'number'.
server/reports/dataReportsMgr.ts(492,13): error TS2322: Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter | DataGetterAsync | null'.
  Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter'.
    Types of parameters 'criteria' and 'criteria' are incompatible.
      Type 'ReportCriteria' is not assignable to type 'Criteria'.
        Types of property 'dsnd_id' are incompatible.
          Type 'number | undefined' is not assignable to type 'number'.
            Type 'undefined' is not assignable to type 'number'.
server/reports/dataReportsMgr.ts(564,76): error TS2339: Property 'currentPdosId' does not exist on type 'ReportUser'.
server/reports/dataReportsMgr.ts(570,13): error TS2322: Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter | DataGetterAsync | null'.
  Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter'.
    Types of parameters 'criteria' and 'criteria' are incompatible.
      Type 'ReportCriteria' is not assignable to type 'Criteria'.
        Types of property 'dsnd_id' are incompatible.
          Type 'number | undefined' is not assignable to type 'number'.
            Type 'undefined' is not assignable to type 'number'.
server/reports/dataReportsMgr.ts(576,13): error TS2322: Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter | DataGetterAsync | null'.
  Type '(criteria: Criteria) => Promise<DataGetterResponse<Data>>' is not assignable to type 'DataGetter'.
    Types of parameters 'criteria' and 'criteria' are incompatible.
      Type 'ReportCriteria' is not assignable to type 'Criteria'.
        Types of property 'rdsnId' are incompatible.
          Type 'number | undefined' is not assignable to type 'number'.
            Type 'undefined' is not assignable to type 'number'.
server/reports/dataReportsMgr.ts(594,72): error TS2345: Argument of type 'ReportCriteria' is not assignable to parameter of type 'ValidationCriteria'.
  Property 'origineRubs' is missing in type 'ReportCriteria' but required in type 'ValidationCriteria'.
server/reports/dataReportsMgr.ts(609,76): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
  Property 'currentPdosId' is missing in type 'ReportUser' but required in type 'User'.
server/reports/dataReportsMgr.ts(615,75): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
server/reports/dataReportsMgr.ts(627,78): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
server/reports/dataReportsMgr.ts(633,67): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
server/reports/dataReportsMgr.ts(639,75): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
server/reports/dataReportsMgr.ts(651,66): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
server/reports/dataReportsMgr.ts(663,60): error TS2345: Argument of type 'ReportUser' is not assignable to parameter of type 'User'.
server/reports/dataReportsMgr.ts(731,95): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/generateSpecificReport.spec.ts(10,19): error TS2741: Property 'lots_id_granted' is missing in type '{ srep_id: number; pad_id: number; peri: number; }' but required in type 'ParamsReceived'.
server/reports/generateSpecificReport.ts(211,9): error TS2790: The operand of a 'delete' operator must be optional.
server/reports/getFileNameForSave.ts(67,18): error TS2339: Property 'bulSimpl' does not exist on type 'ReportCriteria'.
server/reports/getFooterTemplate.ts(1,87): error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
server/reports/objectToTemplateArray.ts(28,9): error TS2322: Type '(TemplateHeaderWithValue | null)[]' is not assignable to type 'TemplateHeaderWithValue[]'.
  Type 'TemplateHeaderWithValue | null' is not assignable to type 'TemplateHeaderWithValue'.
    Type 'null' is not assignable to type 'TemplateHeaderWithValue'.
server/reports/objectToTemplateArray.ts(84,5): error TS2322: Type '(TemplateHeaderWithValue | null)[]' is not assignable to type 'TemplateHeaderWithValue[]'.
server/reports/prepareReport.ts(28,42): error TS2345: Argument of type 'User' is not assignable to parameter of type 'ReportUser'.
  Type 'User' is missing the following properties from type 'ReportUser': currentPAD, scope
server/reports/reportsMgr.ts(36,33): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/reportsMgr.ts(66,48): error TS2339: Property 'messages' does not exist on type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(47,70): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Params'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'Params': peri, pad_id, lot_id, sal_id, eta_id
server/reports/routerReports.ts(49,3): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(54,20): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(71,70): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Params'.
  Type '{ [key: string]: any; }' is missing the following properties from type 'Params': peri, pad_id, lot_id, sal_id, eta_id
server/reports/routerReports.ts(74,3): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(79,20): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(94,48): error TS2345: Argument of type '{ [key: string]: any; }' is not assignable to parameter of type 'Params'.
server/reports/routerReports.ts(119,66): error TS2345: Argument of type '{ pad_id: number; }' is not assignable to parameter of type 'Params'.
  Type '{ pad_id: number; }' is missing the following properties from type 'Params': peri, lot_id, sal_id, eta_id
server/reports/routerReports.ts(156,3): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(158,20): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/reports/routerReports.ts(327,25): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
server/reports/specificReports/generateSpecificReportAbsenteisme.ts(34,13): error TS2322: Type '"ouvrés"' is not assignable to type 'TypeMethode'.
server/reports/templateMgr.ts(101,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
  Type '"chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(111,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(150,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(159,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(167,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(175,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(220,13): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(236,17): error TS2322: Type 'REPORT_TYPE_OUTPUT.HTML | REPORT_TYPE_OUTPUT.CHROMEPDF | REPORT_TYPE_OUTPUT.EXCEL | REPORT_TYPE_OUTPUT.SEPA | REPORT_TYPE_OUTPUT.DATA | "chrome-pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/reports/templateMgr.ts(405,28): error TS2345: Argument of type 'TemplateStoredConfig | undefined' is not assignable to parameter of type 'TemplateStoredConfig | PromiseLike<TemplateStoredConfig | null> | null'.
  Type 'undefined' is not assignable to type 'TemplateStoredConfig | PromiseLike<TemplateStoredConfig | null> | null'.
server/sepa/lockBuls.ts(2,10): error TS2459: Module '"./savePayment"' declares 'Payment' locally, but it is not exported.
server/sepa/selectDataPaymentsFromBuls.ts(144,38): error TS2367: This condition will always return 'false' since the types 'MODE_PAIEMENT.TOUS' and '3' have no overlap.
server/sepa/selectDataPaymentsFromBuls.ts(166,13): error TS2367: This condition will always return 'false' since the types 'MODE_PAIEMENT.NON_PAYES_UNIQUEMENT' and '3' have no overlap.
server/server.ts(170,59): error TS2339: Property 'get' does not exist on type 'Application'.
server/server.ts(170,76): error TS2339: Property 'get' does not exist on type 'Application'.
server/server.ts(171,24): error TS2339: Property 'listen' does not exist on type 'Application'.
server/server.ts(171,35): error TS2339: Property 'get' does not exist on type 'Application'.
server/server.ts(171,52): error TS2339: Property 'get' does not exist on type 'Application'.
server/server.ts(172,81): error TS2339: Property 'get' does not exist on type 'Application'.
server/server.ts(172,108): error TS2339: Property 'get' does not exist on type 'Application'.
server/server.ts(172,133): error TS2339: Property 'get' does not exist on type 'Application'.
server/socket/socketIOManager.ts(57,10): error TS2349: This expression is not callable.
  Type 'typeof import("/home/runner/work/payroll-app/payroll-app/node_modules/socket.io/dist/index")' has no call signatures.
server/socket/socketIOManager.ts(81,96): error TS2339: Property 'originalUrl' does not exist on type 'IncomingMessage'.
server/test/test-unit/moment/moment.spec.ts(3,1): error TS6133: 'getCurrTs' is declared but its value is never read.
server/test/test-unit/moment/moment.spec.ts(12,14): error TS2551: Property '_locale' does not exist on type 'Moment'. Did you mean 'locale'?
server/test/test-unit/setup.spec.ts(24,1): error TS2741: Property 'serverConfig' is missing in type '{ dbConfig: {}; }' but required in type '{ serverConfig: ServerConfig; dbConfig: any; }'.
server/tools.spec.ts(15,23): error TS2345: Argument of type '"FOOBAR"' is not assignable to parameter of type 'LOG_LEVEL'.
server/tools.ts(145,1): error TS2309: An export assignment cannot be used in a module with other exported elements.
server/tools/getPlural.ts(13,43): error TS2532: Object is possibly 'undefined'.
server/uorgs/routerUorg.ts(17,9): error TS2322: Type '{ messages: never[]; }' is not assignable to type 'ApiServerResponse<any>'.
  Object literal may only specify known properties, and 'messages' does not exist in type 'ApiServerResponse<any>'.
server/uorgs/routerUorg.ts(22,37): error TS2345: Argument of type 'string | string[] | ParsedQs | ParsedQs[] | undefined' is not assignable to parameter of type 'number'.
server/uorgs/routerUorg.ts(26,14): error TS2339: Property 'data' does not exist on type 'ApiServerResponse<any>'.
server/webAPI/abs/webApiAbsRead.ts(22,91): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
server/webAPI/abs/webApiAbsUpdate.ts(22,91): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
server/webAPI/bnqs/webApiBnqsSetDefault.ts(36,81): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
server/webAPI/bnqs/webApiBnqsUpdate.ts(30,33): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
server/webAPI/bnqs/webApiBnqsUpdate.ts(35,100): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
server/webAPI/bul/identifyBul.ts(30,41): error TS2571: Object is of type 'unknown'.
server/webAPI/bul/webApiBulGetPdf.ts(11,10): error TS6133: 'OutputFile' is declared but its value is never read.
server/webAPI/bul/webApiBulGetPdf.ts(34,41): error TS2345: Argument of type 'BodyBulGetPdf' is not assignable to parameter of type 'CfgIdentifySal'.
  The types of 'data.sal_id_externe' are incompatible between these types.
    Type 'number | undefined' is not assignable to type 'string | undefined'.
      Type 'number' is not assignable to type 'string | undefined'.
server/webAPI/bul/webApiBulGetPdf.ts(40,41): error TS2345: Argument of type 'BodyBulGetPdf' is not assignable to parameter of type 'CfgIdentifyCnt'.
  The types of 'data.cnt_id_externe' are incompatible between these types.
    Type 'number | undefined' is not assignable to type 'string | undefined'.
server/webAPI/bul/webApiBulGetPdf.ts(93,16): error TS2345: Argument of type '(errPdf: Error | null, bulIds: any, resultPdf: ResultReportManager) => void' is not assignable to parameter of type 'AsyncResultCallback<any, Error>'.
server/webAPI/bul/webApiBulGetPdf.ts(147,9): error TS2322: Type '"pdf"' is not assignable to type 'REPORT_TYPE_OUTPUT'.
server/webAPI/bul/webApiBulGetPdf.ts(165,47): error TS2345: Argument of type '{ uti_id: number; }' is not assignable to parameter of type 'User'.
  Type '{ uti_id: number; }' is missing the following properties from type 'User': sal_id, uti_nom, uti_prenom, currentPAD, and 4 more.
server/webAPI/cnt/insertAVT.ts(43,53): error TS2345: Argument of type '{ entity: string; action: string; data: DataAvt; }' is not assignable to parameter of type 'BodyAvt'.
  Type '{ entity: string; action: string; data: DataAvt; }' is missing the following properties from type 'WebApiPayload<DataAvt>': version, dospay_id
server/webAPI/cnt/webApiCnt.ts(266,51): error TS2345: Argument of type '(err?: Error | null | undefined, result?: number[] | undefined) => void' is not assignable to parameter of type '(err?: Error | null | undefined, sal_id?: number | null | undefined, client?: PoolClient | undefined) => void'.
  Types of parameters 'result' and 'sal_id' are incompatible.
    Type 'number | null | undefined' is not assignable to type 'number[] | undefined'.
      Type 'null' is not assignable to type 'number[] | undefined'.
server/webAPI/cnt/webApiCnt.ts(267,51): error TS2345: Argument of type '(err?: Error | null | undefined, result?: number[] | undefined) => void' is not assignable to parameter of type '(err?: Error | null | undefined, cnt_id?: number | null | undefined, client?: PoolClient | undefined) => void'.
  Types of parameters 'result' and 'cnt_id' are incompatible.
    Type 'number | null | undefined' is not assignable to type 'number[] | undefined'.
server/webAPI/cnt/webApiCnt.ts(715,30): error TS2345: Argument of type '{ dospay_id: number; entity: string; action: string; version: string; data: DataEct; }' is not assignable to parameter of type 'WebApiPayload<Record<string, unknown>>'.
  Types of property 'data' are incompatible.
    Type 'DataEct' is not assignable to type 'Record<string, unknown>'.
      Index signature is missing in type 'DataEct'.
server/webAPI/cnt/webApiCnt.ts(759,35): error TS2345: Argument of type '{ dospay_id: number; entity: string; action: string; version: string; data: DataEct; }' is not assignable to parameter of type 'WebApiPayload<Record<string, unknown>>'.
  Types of property 'data' are incompatible.
    Type 'DataEct' is not assignable to type 'Record<string, unknown>'.
server/webAPI/cnt/webApiCnt.ts(1193,39): error TS2345: Argument of type 'unknown' is not assignable to parameter of type 'number'.
server/webAPI/cnt/webApiCntRead.ts(32,43): error TS2345: Argument of type 'BodyCnt' is not assignable to parameter of type 'CfgIdentifyCnt'.
  The types of 'data.cnt_id_externe' are incompatible between these types.
    Type 'number | undefined' is not assignable to type 'string | undefined'.
server/webAPI/sal/webApiSalAddUpdate.ts(41,29): error TS2345: Argument of type 'IBodySalAddOrUpdate' is not assignable to parameter of type 'CfgIdentifySal'.
  The types of 'data.sal_id_externe' are incompatible between these types.
    Type 'sal_id_externe' is not assignable to type 'string | undefined'.
      Type 'null' is not assignable to type 'string | undefined'.
server/webAPI/sal/webApiSalAddUpdate.ts(45,41): error TS2345: Argument of type '(err?: Error | null | undefined, client?: PoolClient | undefined, sal_id?: number | null | undefined) => void' is not assignable to parameter of type 'IWebApiCallback'.
  Types of parameters 'client' and 'successResponse' are incompatible.
    Type 'IWebApiSuccessResponse<Data> | undefined' is not assignable to type 'PoolClient | undefined'.
      Type 'IWebApiSuccessResponse<Data>' is missing the following properties from type 'PoolClient': release, connect, query, copyFrom, and 20 more.
server/webAPI/sal/webApiSalAddUpdate.ts(75,27): error TS2345: Argument of type '{ auth: boolean; success: boolean; error: { code: number; message: string; }; }' is not assignable to parameter of type 'Error'.
  Type '{ auth: boolean; success: boolean; error: { code: number; message: string; }; }' is missing the following properties from type 'Error': name, message
server/webAPI/sal/webApiSalRead.ts(120,67): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
server/webAPI/sendBulsGJ.ts(190,8): error TS2739: Type '{ pad_id: number; bul_id: number[]; outputType: REPORT_TYPE_OUTPUT.DATA; bulSimpl: false; }' is missing the following properties from type 'ReportBulsCriteria': modeSelectionEuti, name, peri_debut, peri_fin
server/webAPI/sendBulsGJ.ts(215,60): error TS2345: Argument of type '{ includeVva: boolean; groupByContractSocialItems: boolean; progressReporter: () => void; }' is not assignable to parameter of type 'OptionsReportBul'.
  Type '{ includeVva: boolean; groupByContractSocialItems: boolean; progressReporter: () => void; }' is missing the following properties from type 'OptionsReportBul': nbDecimalsColBase, nbDecimalsColsTaux, forceCompleterZeros
server/webAPI/shared/checkSession.ts(103,21): error TS2345: Argument of type 'boolean | undefined' is not assignable to parameter of type 'boolean | PromiseLike<boolean>'.
  Type 'undefined' is not assignable to type 'boolean | PromiseLike<boolean>'.
server/webAPI/shared/processRequest.ts(62,47): error TS2352: Conversion of type 'WebApiPayload<Record<string, unknown>>' to type 'IBodySal' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'Record<string, unknown>' is missing the following properties from type 'IDataSal': sal_id, bnqs
server/webAPI/shared/processRequest.ts(114,51): error TS2345: Argument of type 'WebApiPayload<Record<string, unknown>>' is not assignable to parameter of type 'WebApiPayloadVva'.
  Type 'Record<string, unknown>' is missing the following properties from type 'DataVvaSetValue': var_code, vva_niveau, vva_valeur, vva_datedebut, vva_periodedebut
server/webAPI/shared/processRequest.ts(122,51): error TS2345: Argument of type 'WebApiPayload<Record<string, unknown>>' is not assignable to parameter of type 'WebApiPayloadVva'.
server/webAPI/vva/webApiVvaAddBatchPer.ts(70,12): error TS2345: Argument of type '(err: any, client: any, lvvaInserted: any) => any' is not assignable to parameter of type 'AsyncResultCallback<any, any>'.
server/webAPI/vva/webApiVvaAddBatchPer.ts(96,29): error TS2345: Argument of type 'BodyBatchVva' is not assignable to parameter of type 'CfgIdentifyCnt'.
  The types of 'data.cnt_id_externe' are incompatible between these types.
    Type 'number | undefined' is not assignable to type 'string | undefined'.
server/webAPI/vva/webApiVvaSetValue.ts(121,61): error TS2345: Argument of type 'IWebApiCallback' is not assignable to parameter of type 'AsyncCallback'.
  Types of parameters 'errorResponse' and 'error' are incompatible.
    Type 'Error | ErrorSQL | "STOP" | ErrorOrSkipNew | null | undefined' is not assignable to type 'Error | IWebApiErrorResponse | null | undefined'.
      Type '"STOP"' is not assignable to type 'Error | IWebApiErrorResponse | null | undefined'.
test-integration/app/unauthenticatedRoute.spec.ts(1,23): error TS2305: Module '"../commonIntegration"' has no exported member 'db'.
test-integration/commonIntegration.ts(59,4): error TS2794: Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
test-integration/getComputedData/computeOnePeriod.spec.ts(25,17): error TS2739: Type '{ startDate: Moment; endDate: Moment; }' is missing the following properties from type 'Week': numWeek, numMonth, vva, isLastPeriode
test-integration/setup.spec.ts(20,1): error TS2741: Property 'serverConfig' is missing in type '{ dbConfig: { user: string; host: string; database: string; password: string; ssl: boolean; port: number; max: number; application_name: string; idleTimeoutMillis: number; connectionTimeoutMillis: number; }; }' but required in type '{ serverConfig: ServerConfig; dbConfig: any; }'
`;
