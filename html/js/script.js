document.addEventListener('DOMContentLoaded', function() {
    showSection('introduction'); // Mostrar introdução por padrão
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showAnalysis(stanzaNumber) {
    const analysis = document.getElementById(`analysis${stanzaNumber}`);
    if (analysis.style.display === 'none' || !analysis.style.display) {
        analysis.style.display = 'block';
    } else {
        analysis.style.display = 'none';
    }
}

function showGeneralInfo() {
    const generalInfo = document.getElementById('generalInfo');
    if (generalInfo.style.display === 'none' || !generalInfo.style.display) {
        generalInfo.style.display = 'block';
    } else {
        generalInfo.style.display = 'none';
    }
}

function showIntro(topic) {
    const introContents = document.querySelectorAll('.intro-content');
    introContents.forEach(content => {
        content.style.display = 'none';
    });
    if (topic === 'camoes') {
        document.getElementById('introCamoes').style.display = 'block';
    } else if (topic === 'lusiadas') {
        document.getElementById('introLusiadas').style.display = 'block';
    }
}
