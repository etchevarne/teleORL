if (zumbido && perdaAuditiva && faixaEtaria === 'idoso') {
    diagnostico += 'Presbiacusia ';
}
if (zumbido && perdaAuditiva && vertigem && ouvidoCheio && historico === 'sim') {
    diagnostico += 'Doença de Meniere ';
}
if (zumbido && perdaAuditiva && vertigem && historico === 'sim') {
    diagnostico += 'VPPB - Vertigem Posicional Paroxística Benigna ';
}
if (zumbido && perdaAuditiva && vertigem && ouvidoCheio && tempoSintomas === '30') {
    diagnostico += 'Neurite Vestibular';
}

if (corpoEstranho && secrecao) {
    diagnostico += 'PROCURE ATENDIMENTO DE URGÊNCIA!!!';
        
}

if (dor && secrecao && resfriadoRecente === 'sim') {
    diagnostico += 'Otite Média Aguda Supurada ';
}
if (dor && (tempoSintomas === '7' || tempoSintomas === '14') &&  (faixaEtaria === 'criança' || faixaEtaria === 'bebe')&& resfriadoRecente === 'sim') {
    diagnostico += 'Otite Média Aguda Bacteriana ';
}

if ( dor && ouvidoCheio && (exposicaoAgua == 'não' && resfriadoRecente == 'sim')) {
    diagnostico += ' Otite Média Aguda ou Otite Externa Localizada ';
}

if (coceira && ouvidoCheio) {
    diagnostico += 'Otite Externa Fúngica ';
}
if (coceira && ouvidoCheio && exposicaoAgua === 'sim') {
    diagnostico += 'Otite Externa Aguda Fúngica ';
}

if ( dor && (exposicaoAgua == 'sim' && resfriadoRecente == 'não')) {
    diagnostico += ' Otite Externa Difusa Aguda Bacteriana ';
}

if ( dor && ouvidoCheio && (exposicaoAgua == 'sim' && resfriadoRecente == 'não')) {
    diagnostico += ' Otite Externa Difusa Aguda ou Otite Externa Localizada ';
}

if (coceira && ouvidoCheio && dor && (exposicaoAgua == 'sim' && resfriadoRecente == 'não')) {
    diagnostico += 'Otite Externa Aguda Mista ( Bacteriana e Fúngica) ';
}