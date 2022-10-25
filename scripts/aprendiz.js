export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSTGRADO"] = "Postgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var total_cursosC = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            var curso = this.cursos[index];
            if (curso.certficado) {
                total_cursosC += 1;
            }
        }
        return total_cursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
