window.BENCHMARK_DATA = {
  "lastUpdate": 1614455085708,
  "repoUrl": "https://github.com/EmbarkStudios/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455073102,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192404,
            "range": "± 14155",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 719305,
            "range": "± 55092",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5475166,
            "range": "± 590168",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20296480,
            "range": "± 2697044",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455081949,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14652,
            "range": "± 5927",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 905,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 566,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14732,
            "range": "± 3517",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 980,
            "range": "± 168",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "stepan.koltsov@gmail.com",
            "name": "Stepan Koltsov",
            "username": "stepancheg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ad7afd21e4faef05ccccb0288bc814a954b990",
          "message": "time: do not panic on timeout(Duration::MAX) (#3551)\n\nIt is tempting to use very large `Duration` value to get a practically\r\ninfinite timeout.\r\n\r\nBefore this commit Tokio panics on checked Instant + Duration\r\noverflow.\r\n\r\nThis commit implements very simple fix: if Instant + Duration\r\noverflows, we use duration = 30 years. Better fix should avoid\r\nfiring a timer on duration overflow. It requires deeper understanding\r\nhow timers work, but also it is not clear, for example, what\r\n`Sleep::deadline` function should return.\r\n\r\nSimilar fix is done for `sleep`.",
          "timestamp": "2021-02-26T10:04:08+01:00",
          "tree_id": "98d543466cff5c05d0d1fbfb819d7ee2234d6559",
          "url": "https://github.com/EmbarkStudios/tokio/commit/d2ad7afd21e4faef05ccccb0288bc814a954b990"
        },
        "date": 1614455084406,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7017550,
            "range": "± 2383196",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6466339,
            "range": "± 1884997",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6339395,
            "range": "± 2231062",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 623,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 626,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 612,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 84678,
            "range": "± 5973",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1496,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1148964,
            "range": "± 64066",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 823580,
            "range": "± 44605",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}