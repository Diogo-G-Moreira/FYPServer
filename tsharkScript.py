import subprocess

program='tshark -a duration:5 -w serverMetrics.pcap'
subprocess.call(program, shell=True)

