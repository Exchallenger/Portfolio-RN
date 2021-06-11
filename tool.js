export const TextCut = (data,lan) => (data.length <= lan
 ? data + '\n' : data.slice(0,lan) + '\n' + data.slice(lan));