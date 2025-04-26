import React, { useState } from 'react';
import { Code, ListChecks, Puzzle, Layers } from 'lucide-react';

const DSAPattern = () => {
  const [activePattern, setActivePattern] = useState('sliding-window');

  const patterns = [
    { id: 'sliding-window', name: 'Sliding Window', icon: <Layers size={18} /> },
    { id: 'two-pointers', name: 'Two Pointers', icon: <ListChecks size={18} /> },
    { id: 'fast-slow-pointers', name: 'Fast & Slow Pointers', icon: <Puzzle size={18} /> },
    { id: 'merge-intervals', name: 'Merge Intervals', icon: <Code size={18} /> },
  ];

  const content = {
    'sliding-window': {
      description:
        'Sliding window is a technique for problems involving arrays/lists where you need to find a subrange that meets a condition.',
      example:
`Find max sum of a subarray of size k.

function maxSum(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}`
    },
    'two-pointers': {
      description:
        'Two pointers are used when searching pairs in a sorted array or list. One pointer starts from the beginning, and another from the end.',
      example:
`Check if a pair exists that sums to target.

function hasPair(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
  }
  return false;
}`
    },
    'fast-slow-pointers': {
      description:
        'This pattern is useful for detecting cycles in a linked list or for problems involving repeated traversal.',
      example:
`Detect cycle in a linked list.

function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`
    },
    'merge-intervals': {
      description:
        'Used when dealing with overlapping intervals. Sort intervals and merge them based on overlaps.',
      example:
`Merge overlapping intervals.

function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}`
    },
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
      <h3 className="text-lg font-bold mb-6 text-center">DSA Pattern Cheatsheet</h3>

      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            className={`px-3 py-1 rounded-md text-sm whitespace-nowrap ${
              activePattern === pattern.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActivePattern(pattern.id)}
          >
            <span className="inline-flex items-center">
              {pattern.icon}
              <span className="ml-1">{pattern.name}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
        <h4 className="text-xl font-bold text-blue-700 mb-2">
          {patterns.find((p) => p.id === activePattern)?.name}
        </h4>
        <p className="text-gray-700 mb-4">{content[activePattern].description}</p>
        <h5 className="font-semibold text-gray-800 mb-2">Example:</h5>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
          <code className="text-blue-600 whitespace-pre-wrap">
            {content[activePattern].example}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DSAPattern;
