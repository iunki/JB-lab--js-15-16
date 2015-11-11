/**
 * Object.create(proto[, propertiesObject])
 * Создаёт объект - наследник proto.
 *
 * @param {Object, Function, null} proto - объект, который станет прототипом вновь созданного объекта.
 *
 * @param {Object} propertiesObject - необязательный объект, чьи поля будут добавленый в новосозданный объект
 *
 * @return {Object}
 *
 * Подробнее по методу можно посмотретьпо спецификации ES5
 */
Object.create = function(proto){
    if(typeof proto != "object" || (arguments[1]!="undefind" && arguments[1] != "object")){
        throw new Error("Invalid arguments");
    }
    obj = new Object();
    obj.prototype = proto;
    if (arguments.length > 1){
        for (var i in arguments[1]){
            obj[i] = arguments[1][i];
        }
    }
    return obj;
};


/**
 * -- test your might
 * node - функция построение дерева.
 * Вызов функции создаёт у текущего узла дочерний с именем name и возвращает созданный узел,
 * который в свою очередь является точно такой же функцией node.
 * При вызове node, как конструктора будет создаваться корневой узел, не имеющий родителя
 *
 * @example
 * var a,b,c,d,e,f;
 * a = new node('root');
 * b = a('b');
 * c = a('c');
 * d = b('d');
 * e = b('e');
 * f = e('f');
 * e.getPath() // 'root/b/f/e'
 * структура всего дерева: root:[b:[d,e:[f]],c]
 *
 * @param {String} name - имя узла
 *
 * @method getChild() => массив всех дочерних узлов
 *
 * @method getPath() => путь от корневого до текущего узла
 *
 * @method getName() => name
 *
 * @return {Function} node
 */
function node(name){

}
