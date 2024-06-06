function solution(bridge_length, weight, truck_weights) {
  let onBridge = new Array(bridge_length).fill(0);
  let answer = 0;

  while (onBridge.length) {
    answer++;
    onBridge.shift();

    if (truck_weights.length) {
      let onBridgeSum = 0;

      onBridge.forEach((truck) => {
        onBridgeSum += truck;
      });

      if (onBridgeSum + truck_weights[0] <= weight) {
        onBridge.push(truck_weights.shift());
      } else {
        onBridge.push(0);
      }
    }
  }

  return answer;
}
